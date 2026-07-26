/**
 * UJS - Universal Micro-JS Component Section Loader
 * Automatically fetches modular section HTML and injects section CSS.
 * Compatible with web servers (http://) and local file browsing (file://).
 */
(function () {
  'use strict';

  const loadedCSS = new Set();

  function loadCSS(sectionName) {
    const cssPath = `sections/${sectionName}/${sectionName}.css`;
    if (loadedCSS.has(cssPath)) return;

    const existing = document.querySelector(`link[href="${cssPath}"]`);
    if (!existing) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = cssPath;
      document.head.appendChild(link);
    }
    loadedCSS.add(cssPath);
  }

  const EMBEDDED_SECTIONS = window.UJS_SECTIONS || {};

  async function loadSection(container) {
    const sectionName = container.getAttribute('data-section') || container.getAttribute('name');
    if (!sectionName) return;

    loadCSS(sectionName);

    let htmlContent = '';

    if (EMBEDDED_SECTIONS[sectionName]) {
      htmlContent = EMBEDDED_SECTIONS[sectionName];
    } else {
      const htmlPath = `sections/${sectionName}/${sectionName}.html`;
      try {
        const response = await fetch(htmlPath);
        if (response.ok) {
          htmlContent = await response.text();
        } else if (EMBEDDED_SECTIONS[sectionName]) {
          htmlContent = EMBEDDED_SECTIONS[sectionName];
        }
      } catch (error) {
        if (EMBEDDED_SECTIONS[sectionName]) {
          htmlContent = EMBEDDED_SECTIONS[sectionName];
        } else {
          console.warn(`[UJS Loader] Warning loading section "${sectionName}":`, error);
          return;
        }
      }
    }

    if (!htmlContent) return;

    const temp = document.createElement('div');
    temp.innerHTML = htmlContent.trim();
    const children = Array.from(temp.childNodes);

    if (children.length > 0) {
      container.replaceWith(...children);
    } else {
      container.outerHTML = htmlContent;
    }
  }

  async function initSections() {
    const containers = document.querySelectorAll('[data-section], section-include, include-section');
    if (containers.length === 0) return;

    const promises = Array.from(containers).map(container => loadSection(container));
    await Promise.all(promises);

    window.__ujsSectionsLoaded = true;
    document.dispatchEvent(new CustomEvent('sectionsLoaded', { detail: { count: containers.length } }));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSections);
  } else {
    initSections();
  }

  window.UJS = {
    loadSections: initSections,
    loadSection: loadSection
  };
})();
