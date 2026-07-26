document.addEventListener('DOMContentLoaded', () => {


  // ==========================================
  // 1. Hero Section Auto-Scrolling Columns
  // ==========================================
  let isMarqueeInitialized = false;

  function initHeroMarquee() {
    if (isMarqueeInitialized) return;

    const col1 = document.querySelector('.css-1qckpyi');
    const col2 = document.querySelector('.css-3wk2g');
    const heroContainer = document.querySelector('.css-ubcioi');

    if (!col1 || !heroContainer) return;
    isMarqueeInitialized = true;

    // Clear static inline styles
    col1.style.transform = 'translateY(0)';
    if (col2) col2.style.transform = 'translateY(0)';

    let y1 = 0;
    let y2 = 0;
    let loopHeight1 = 0;
    let loopHeight2 = 0;

    // Helper to calculate loop height based on duplicate child images
    function calculateLoopHeight(col) {
      if (!col) return 0;
      const children = Array.from(col.children);
      if (children.length === 0) return 0;
      
      const alts = children.map(c => {
        const img = c.querySelector('img');
        return img ? img.alt : '';
      });

      // Find first repeat index
      let repeatIndex = children.length;
      const seen = new Set();
      for (let i = 0; i < children.length; i++) {
        const alt = alts[i];
        if (alt && seen.has(alt)) {
          repeatIndex = i;
          break;
        }
        seen.add(alt);
      }

      // Sum heights up to repeatIndex
      let height = 0;
      const style = window.getComputedStyle(col);
      const gap = parseFloat(style.gap) || 0;

      for (let i = 0; i < repeatIndex; i++) {
        height += children[i].offsetHeight + gap;
      }
      return height > 0 ? height - gap : col.scrollHeight / 2;
    }

    // Measure loop heights after images load
    function initializeHeights() {
      loopHeight1 = calculateLoopHeight(col1);
      loopHeight2 = calculateLoopHeight(col2);
      
      // Initialize starting positions
      if (loopHeight1 > 0) y1 = -loopHeight1;
      y2 = 0;
    }

    // Run measurement
    initializeHeights();
    window.addEventListener('load', initializeHeights);
    window.addEventListener('resize', initializeHeights);
    setTimeout(initializeHeights, 500);

    // Speed of scroll (pixels per frame)
    const speed = 0.55;

    function scrollHero() {
      if (loopHeight1 > 0) {
        // Column 1: Scrolls DOWN (y1 increases towards 0)
        y1 += speed;
        if (y1 >= 0) {
          y1 = -loopHeight1;
        }
        col1.style.transform = `translateY(${y1}px)`;
      }

      if (col2 && loopHeight2 > 0) {
        // Column 2: Scrolls UP (y2 decreases towards negative)
        y2 -= speed;
        if (y2 <= -loopHeight2) {
          y2 = 0;
        }
        col2.style.transform = `translateY(${y2}px)`;
      }

      // Snap Animation check
      const containerRect = heroContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      Array.from(col1.children).forEach(card => {
        animateCardComponents(card, centerY);
      });

      if (col2) {
        Array.from(col2.children).forEach(card => {
          animateCardComponents(card, centerY);
        });
      }

      requestAnimationFrame(scrollHero);
    }

    function animateCardComponents(card, targetCenterY) {
      const badge = card.querySelector('.css-1to9j1');
      const matchCard = card.querySelector('.css-1o2cgyt, .css-13prtt1');
      
      if (badge || matchCard) {
        const cardRect = card.getBoundingClientRect();
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(cardCenterY - targetCenterY);

        if (distance < 140) {
          if (badge) badge.classList.add('active-badge');
          if (matchCard) {
            matchCard.classList.add('active-card');
            const checkmark = matchCard.querySelector('.css-gmuwbf');
            if (checkmark) checkmark.classList.add('active-checkmark');
          }
        } else {
          if (badge) badge.classList.remove('active-badge');
          if (matchCard) {
            matchCard.classList.remove('active-card');
            const checkmark = matchCard.querySelector('.css-gmuwbf');
            if (checkmark) checkmark.classList.remove('active-checkmark');
          }
        }
      }
    }

    // Start auto-scroll animation loop
    requestAnimationFrame(scrollHero);
  }

  // Trigger init on DOMContentLoaded, sectionsLoaded, window load, or fallback timeout
  initHeroMarquee();
  document.addEventListener('sectionsLoaded', initHeroMarquee);
  window.addEventListener('load', initHeroMarquee);
  setTimeout(initHeroMarquee, 300);
  setTimeout(initHeroMarquee, 1000);

  // ==========================================
  // 3. Scroll Triggered Section Transitions
  // ==========================================
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px 0px 0px',  // trigger as soon as any part enters viewport
    threshold: 0.03                  // only 3% visible needed
  };

  // Track already-observed elements so we never double-observe or remove anim-active
  const observedElements = new WeakSet();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('anim-active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const ANIM_SELECTORS = [
    '.omk-CareerTools-card',
    '.omk-JobStatsSection-circle',
    '.omk-JobStatsSection-circleImage'
    // Insights cards handled by initInsightsCards() below
  ].join(',');

  // Only observe elements not yet tracked — never strips anim-active from visible elements
  function initScrollAnimations() {
    document.querySelectorAll(ANIM_SELECTORS).forEach(el => {
      if (!observedElements.has(el)) {
        observedElements.add(el);
        observer.observe(el);
      }
    });
  }

  // ==========================================
  // sectionsReady — runs AFTER sections are in DOM
  // Initialises slider, testimonials & buttons
  // ==========================================
  let sectionsReadyDone = false;

  function sectionsReady() {
    // Scroll animations (safe to call multiple times)
    initScrollAnimations();

    if (sectionsReadyDone) return; // Slider/buttons only init once
    sectionsReadyDone = true;

    // ---- Testimonials Horizontal Slider ----
    const sliderRow = document.querySelector('.omk-TestimonialsSection-testimonialRow');
    const slides    = document.querySelectorAll('.omk-TestimonialsSection-testimonialContainer');
    const stepper   = document.querySelector('.css-h2ixdy');
    const testimonialImage = document.querySelector('.omk-TestimonialsSection-image');

    if (sliderRow && slides.length > 0 && stepper) {
      const leftBtn = stepper.querySelector('button:first-of-type');
      const rightBtn = stepper.querySelector('button:last-of-type');
      const dots = stepper.querySelectorAll('.MuiMobileStepper-dot');

      dots.forEach((dot, idx) => {
        if (idx >= slides.length) dot.style.display = 'none';
      });

      let activeIndex = 0;
      sliderRow.style.transform = 'translateX(0)';
      slides.forEach(slide => slide.style.transform = 'none');

      if (testimonialImage) {
        testimonialImage.classList.add('active-image');
        testimonialImage.style.transform = 'none';
      }

      function updateSlider() {
        if (activeIndex < 0 || activeIndex >= slides.length || !slides[activeIndex]) return;
        const containerWidth = sliderRow.parentElement.offsetWidth;
        const slideWidth = slides[activeIndex].offsetWidth;
        const slideLeft  = slides[activeIndex].offsetLeft;
        sliderRow.style.transform = `translateX(${-slideLeft + (containerWidth - slideWidth) / 2}px)`;

        slides.forEach((slide, idx) => {
          slide.classList.toggle('active-slide', idx === activeIndex);
        });
        dots.forEach((dot, idx) => {
          const isActive = idx === activeIndex;
          dot.classList.toggle('MuiMobileStepper-dotActive', isActive);
          dot.classList.toggle('css-atk29w', isActive);
          dot.classList.toggle('css-1p6mvpn', !isActive);
        });
      }

      if (leftBtn)  leftBtn.addEventListener('click',  () => { activeIndex = (activeIndex - 1 + slides.length) % slides.length; updateSlider(); });
      if (rightBtn) rightBtn.addEventListener('click', () => { activeIndex = (activeIndex + 1) % slides.length; updateSlider(); });

      dots.forEach((dot, idx) => {
        dot.style.cursor = 'pointer';
        dot.addEventListener('click', () => { activeIndex = idx; updateSlider(); });
      });

      setTimeout(updateSlider, 200);
      window.addEventListener('resize', updateSlider);
    }

    // ---- Button / CTA listeners ----
    attachButtonListeners();

    // ---- Insights Cards — pure JS scroll animation ----
    initInsightsCards();
  }

  /**
   * initInsightsCards
   * Completely JS-driven: sets inline opacity/transform, then reveals
   * on scroll. No CSS !important conflicts possible.
   */
  function initInsightsCards() {
    const cards = Array.from(document.querySelectorAll('.omk-UppstriveInsights-card'));
    if (!cards.length) return;

    // FIRST: Clear the baked-in inline styles (opacity:0; transform:translateY(500px))
    // so cards render at natural position before we set animation state
    cards.forEach(card => {
      card.style.removeProperty('opacity');
      card.style.removeProperty('transform');
      const img = card.querySelector('.omk-UppstriveInsights-image');
      if (img) {
        img.style.removeProperty('opacity');
        img.style.removeProperty('transform');
      }
    });

    // Force browser to paint natural state before applying hidden animation state
    requestAnimationFrame(() => {
      cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(48px)';
        card.style.transition = 'opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1)';
        const img = card.querySelector('.omk-UppstriveInsights-image');
        if (img) {
          img.style.opacity = '0';
          img.style.transform = 'translateY(20px)';
          img.style.transition = 'opacity 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.1s';
        }
      });

      const revealed = new Set();

      function revealCard(card, staggerIndex) {
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
          const img = card.querySelector('.omk-UppstriveInsights-image');
          if (img) {
            img.style.opacity = '1';
            img.style.transform = 'translateY(0)';
          }
        }, staggerIndex * 140);
      }

      function checkInsights() {
        const vh = window.innerHeight;
        cards.forEach((card, i) => {
          if (revealed.has(card)) return;
          const rect = card.getBoundingClientRect();
          if (rect.top < vh * 0.97) {
            revealed.add(card);
            revealCard(card, i);
          }
        });
      }

      // Use capture:true to catch scroll on ANY scrollable container, not just window
      document.addEventListener('scroll', checkInsights, { passive: true, capture: true });
      window.addEventListener('scroll', checkInsights, { passive: true });
      // Also check after paint — catches cards already in viewport
      requestAnimationFrame(checkInsights);
      setTimeout(checkInsights, 500);
      setTimeout(checkInsights, 1200);
    });
  }

  // ==========================================
  // 5. Contact Lead Modal Popup Form
  // ==========================================
  const modalHTML = `
    <div class="lead-modal-backdrop" id="leadModal">
      <div class="lead-modal-container">
        <button class="lead-modal-close-btn" id="closeModalBtn" aria-label="Close modal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div id="modalContentWrapper">
          <div class="lead-modal-header">
            <h3 class="lead-modal-title">Get Started</h3>
            <p class="lead-modal-subtitle">Let's discuss how UppStrive can accelerate your business growth.</p>
          </div>
          <form class="lead-modal-form" id="leadForm">
            <div class="lead-modal-form-group">
              <label class="lead-modal-label" for="leadName">Full Name</label>
              <input class="lead-modal-input" type="text" id="leadName" required placeholder="John Doe" />
            </div>
            <div class="lead-modal-form-group">
              <label class="lead-modal-label" for="leadEmail">Email Address</label>
              <input class="lead-modal-input" type="email" id="leadEmail" required placeholder="john@company.com" />
            </div>
            <div class="lead-modal-form-group">
              <label class="lead-modal-label" for="leadPhone">Phone Number</label>
              <input class="lead-modal-input" type="tel" id="leadPhone" placeholder="+1 (555) 000-0000" />
            </div>
            <div class="lead-modal-form-group">
              <label class="lead-modal-label" for="leadService">Service Needed</label>
              <select class="lead-modal-select" id="leadService" required>
                <option value="" disabled selected>Select a service</option>
                <option value="marketing">Digital Marketing & Branding</option>
                <option value="it">Innovative IT & Custom Software</option>
                <option value="both">Both Marketing & IT Solutions</option>
              </select>
            </div>
            <div class="lead-modal-form-group">
              <label class="lead-modal-label" for="leadMessage">Message</label>
              <textarea class="lead-modal-textarea" id="leadMessage" rows="3" placeholder="Tell us about your project/goals..."></textarea>
            </div>
            <button class="lead-modal-submit-btn" type="submit">Submit Request</button>
          </form>
        </div>
      </div>
    </div>
  `;

  // Check if modal already exists in DOM (from section template)
  let modal = document.getElementById('leadModal');
  if (!modal) {
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHTML;
    document.body.appendChild(modalContainer.firstElementChild);
    modal = document.getElementById('leadModal');
  }

  const closeBtn = document.getElementById('closeModalBtn');
  const form = document.getElementById('leadForm');
  const contentWrapper = document.getElementById('modalContentWrapper');

  function openModal() {
    modal.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal-open');
    document.body.style.overflow = '';
    // Reset form after animation completes
    setTimeout(() => {
      if (!form) return;
      form.reset();
      contentWrapper.innerHTML = `
        <div class="lead-modal-header">
          <h3 class="lead-modal-title">Get Started</h3>
          <p class="lead-modal-subtitle">Let's discuss how UppStrive can accelerate your business growth.</p>
        </div>
        <form class="lead-modal-form" id="leadForm">
          <div class="lead-modal-form-group">
            <label class="lead-modal-label" for="leadName">Full Name</label>
            <input class="lead-modal-input" type="text" id="leadName" required placeholder="John Doe" />
          </div>
          <div class="lead-modal-form-group">
            <label class="lead-modal-label" for="leadEmail">Email Address</label>
            <input class="lead-modal-input" type="email" id="leadEmail" required placeholder="john@company.com" />
          </div>
          <div class="lead-modal-form-group">
            <label class="lead-modal-label" for="leadPhone">Phone Number</label>
            <input class="lead-modal-input" type="tel" id="leadPhone" placeholder="+1 (555) 000-0000" />
          </div>
          <div class="lead-modal-form-group">
            <label class="lead-modal-label" for="leadService">Service Needed</label>
            <select class="lead-modal-select" id="leadService" required>
              <option value="" disabled selected>Select a service</option>
              <option value="marketing">Digital Marketing & Branding</option>
              <option value="it">Innovative IT & Custom Software</option>
              <option value="both">Both Marketing & IT Solutions</option>
            </select>
          </div>
          <div class="lead-modal-form-group">
            <label class="lead-modal-label" for="leadMessage">Message</label>
            <textarea class="lead-modal-textarea" id="leadMessage" rows="3" placeholder="Tell us about your project/goals..."></textarea>
          </div>
          <button class="lead-modal-submit-btn" type="submit">Submit Request</button>
        </form>
      `;
      // Re-attach form listener
      document.getElementById('leadForm').addEventListener('submit', handleFormSubmit);
    }, 400);
  }

  // Handle Form Submission
  function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('leadName').value;
    
    // Display beautiful success message
    contentWrapper.innerHTML = `
      <div class="lead-modal-success">
        <div class="lead-modal-success-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <h3 class="lead-modal-title">Thank You, ${name}!</h3>
        <p class="lead-modal-subtitle" style="font-size: 16px; line-height: 1.5; margin-top: 8px;">
          Your request has been sent successfully.<br>Our agency experts will contact you shortly.
        </p>
      </div>
    `;
    
    // Auto-close after 2.5 seconds
    setTimeout(closeModal, 2500);
  }

  // Close modal when clicking close button, clicking outside modal, or pressing Escape key
  // Use event delegation in case closeBtn isn't in DOM yet when this runs
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
      // Also handle delegated click on close button
      if (e.target.closest('#closeModalBtn')) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('modal-open')) closeModal();
  });

  // Attach submit listener to initial form
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // Automatically attach click listeners to all buttons containing "Get Started" or "Book a Demo"
  function attachButtonListeners() {
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      const text = el.textContent.trim().toLowerCase();
      if (text === 'get started' || text === 'book a demo' || text === 'login/get started' || text === 'contact us' || el.classList.contains('get-started-btn')) {
        el.removeAttribute('href'); // disable default anchor link redirect
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e) => {
          e.preventDefault();
          openModal();
        });
      }
    });
  }

  // Wire up sectionsReady — runs after sections are in DOM
  // Handle both: sections already injected, or still loading
  if (window.__ujsSectionsLoaded) {
    sectionsReady();
  } else {
    document.addEventListener('sectionsLoaded', sectionsReady);
  }
  // Fallback for edge cases (slow networks, file:// protocol)
  setTimeout(sectionsReady, 600);
  setTimeout(sectionsReady, 1500);
});
