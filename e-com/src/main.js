import handleKeydown from "../../libs/keydown_handler.js";
import handleNoPageAction from "../../libs/handle_mouse_drag.js";
import { saveField, getSavedField, clearSavedField } from "../../libs/save-field.js";
import { buttonClick } from "../../ga/useful_ga.js"
import { handleBackscroll } from "../../libs/handle_backscroll.js"
import { initAnalytics } from "../../ga/tmp.js"

let loadTime = Date.now();

initAnalytics();

document.addEventListener('click', function (e) {
  var modal = document.getElementById('modal-cta');
  if (!modal || modal.style.display !== 'flex') return;
  if (e.target.classList.contains('modal-cta__close') || e.target.classList.contains('modal-cta__overlay')) {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }
});

let alreadySubmitted = getSavedField('form-field-already_submitted') === 'true';

handleNoPageAction(() => {
  alreadySubmitted = getSavedField('form-field-already_submitted') === 'true';
  if (alreadySubmitted) return;
  var modal = document.getElementById('modal-cta');
  if (modal) modal.style.display = 'flex';
  document.body.classList.add('modal-open');
})



// show modal on backscroll if not already submitted and after 2 minutes
handleBackscroll(() => {
  if (loadTime + 120000 > Date.now()) return;
  var modal = document.getElementById('modal-cta');
  alreadySubmitted = getSavedField('form-field-already_submitted') === 'true';
  if (alreadySubmitted) return;
  if (modal) modal.style.display = 'flex';
  document.body.classList.add('modal-open');
})


let modalShown = false;

document.addEventListener('mouseout', (event) => {
  alreadySubmitted = getSavedField('form-field-already_submitted') === 'true';

  if (alreadySubmitted) return;
  if (!modalShown && event.clientY <= 0) {
    var modal = document.getElementById('modal-cta');
    if (modal) modal.style.display = 'flex';
    document.body.classList.add('modal-open');
    modalShown = true;
  }
});

handleKeydown('modal-cta', 'modal-open');



import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './style.css'

const navTrigger = document.querySelector('.nav__trigger')
const navMenu = document.querySelector('.nav__menu')
const navTargets = document.querySelectorAll('.nav__link, .nav__schedule')
const header = document.querySelector('[data-header]')
const animatedItems = document.querySelectorAll('[data-animate]')
const detailsItems = document.querySelectorAll('.faq__item')
const yearTarget = document.querySelector('[data-year]')
const ctaForms = document.querySelectorAll('.final-cta__form');
const formStatus = document.querySelector('.final-cta__form-status');


const openNavigation = () => {
  if (!navTrigger || !navMenu) return
  navTrigger.setAttribute('aria-expanded', 'true')
  navTrigger.classList.add('is-active')
  navMenu.classList.add('is-open')
  document.body.classList.add('no-scroll')
}

const closeNavigation = () => {
  if (!navTrigger || !navMenu) return
  navTrigger.setAttribute('aria-expanded', 'false')
  navTrigger.classList.remove('is-active')
  navMenu.classList.remove('is-open')
  document.body.classList.remove('no-scroll')
}

const toggleNavigation = () => {
  if (!navTrigger || !navMenu) return
  if (navMenu.classList.contains('is-open')) {
    closeNavigation()
  } else {
    openNavigation()
  }
}

const scrollToSection = (selector) => {
  if (!selector || selector === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }

  const target = document.querySelector(selector)
  if (!target) return

  const headerOffset = header ? header.offsetHeight : 0
  const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - headerOffset + 1

  window.scrollTo({ top: Math.max(offsetPosition, 0), behavior: 'smooth' })
}

const handleNavTargetClick = (event) => {
  const target = event.currentTarget
  if (!target) return

  const href = target.getAttribute('href')
  const isAnchorLink = href && href.startsWith('#')
  const wasMenuOpen = navMenu?.classList.contains('is-open')

  if (isAnchorLink) {
    event.preventDefault()
    if (wasMenuOpen) {
      closeNavigation()
    }
    const delay = wasMenuOpen && window.matchMedia('(max-width: 1024px)').matches ? 260 : 0
    window.setTimeout(() => {
      scrollToSection(href)
    }, delay)
  } else if (wasMenuOpen) {
    closeNavigation()
  }
}

if (navTrigger && navMenu) {
  navTrigger.addEventListener('click', toggleNavigation)
}

if (navTargets.length) {
  navTargets.forEach((target) => {
    target.addEventListener('click', handleNavTargetClick)
  })
}

const handleScrollState = () => {
  if (!header) return
  const shouldCompact = window.scrollY > 12
  header.classList.toggle('is-scrolled', shouldCompact)
}

handleScrollState()
window.addEventListener('scroll', handleScrollState, { passive: true })

if (animatedItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -20px 0px',
    }
  )

  animatedItems.forEach((item) => observer.observe(item))
}

if (detailsItems.length) {
  detailsItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        detailsItems.forEach((other) => {
          if (other !== item) {
            other.removeAttribute('open')
          }
        })
      }
    })
  })
}

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear())
}

window.addEventListener('resize', () => {
  if (!navMenu || !navTrigger) return
  if (window.innerWidth > 1024 && navMenu.classList.contains('is-open')) {
    closeNavigation()
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navMenu?.classList.contains('is-open')) {
    closeNavigation()
  }
})

if (ctaForms) {
  ctaForms.forEach(form => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (formStatus) {
        formStatus.textContent = '';
        formStatus.classList.remove('is-success', 'is-error');
      }
      const formData = new FormData(form);
      const name = String(formData.get('name') || '').trim();
      const email = String(formData.get('email') || '').trim();
      const message = String(formData.get('message') || '').trim();
      const errors = [];
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!name) errors.push('Please share your name.');
      if (!email || !emailPattern.test(email)) errors.push('Enter a valid work email.');
      if (!message) errors.push('Type your message.');
      if (errors.length > 0) {
        console.log("errors", errors);
        if (formStatus) {
          formStatus.textContent = errors.join(' ');
          formStatus.classList.add('is-error');
        }
        form.reportValidity();
        return;
      }
      try {
        const response = await fetch('https://e-com.mridata.pro/contact', {
          method: 'POST',
          body: formData,
        });
        if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
        if (formStatus) {
          formStatus.textContent = 'Thank you! A MRI Data specialist will reach out within one business day.';
          formStatus.classList.add('is-success');
        }
        form.reset();
        // Explicitly clear all input and textarea fields with matching names across the document
        // Clear saved fields and set already_submitted
        clearSavedField('email');
        clearSavedField('jobtitle');
        clearSavedField('name');
        clearSavedField('message');
        saveField('form-field-already_submitted', 'true');
      } catch (error) {
        if (formStatus) {
          formStatus.textContent = 'We could not send your message right now. Please try again.';
          formStatus.classList.add('is-error');
        }
      }
      document.querySelectorAll('input[name="email"], input[name="jobtitle"], input[name="name"], textarea[name="message"], input[name="message"], textarea[name="project"], input[name="project"]').forEach(field => {
        field.value = '';
      });
    });
    form.addEventListener('input', () => {
      if (formStatus) {
        formStatus.textContent = '';
        formStatus.classList.remove('is-success', 'is-error');
      }
    });
  })

}

const emailInput = document.querySelectorAll('input[name="email"]');
const jobTitleInput = document.querySelectorAll('input[name="jobtitle"]');
const nameInput = document.querySelectorAll('input[name="name"]');
const infoInput = document.querySelectorAll('textarea[name="message"]');

document.addEventListener('DOMContentLoaded', function () {
  const savedEmail = getSavedField('email');
  if (savedEmail && emailInput.length) {
    emailInput.forEach(input => { input.value = savedEmail; });
  }
  const savedJobTitle = getSavedField('jobtitle');
  if (savedJobTitle && jobTitleInput.length) {
    jobTitleInput.forEach(input => { input.value = savedJobTitle; });
  }
  const savedName = getSavedField('name');
  if (savedName && nameInput.length) {
    nameInput.forEach(input => { input.value = savedName; });
  }
  const savedInfo = getSavedField('message');
  if (savedInfo && infoInput.length) {
    infoInput.forEach(input => { input.value = savedInfo; });
  }

  alreadySubmitted = getSavedField('form-field-already_submitted');
});

if (emailInput.length) {
  emailInput.forEach(input => {
    input.addEventListener('input', (e) => {
      saveField('email', e.target.value);
      emailInput.forEach(other => { if (other !== input) other.value = e.target.value; });
    });
  });
}
if (jobTitleInput.length) {
  jobTitleInput.forEach(input => {
    input.addEventListener('input', (e) => {
      saveField('jobtitle', e.target.value);
      jobTitleInput.forEach(other => { if (other !== input) other.value = e.target.value; });
    });
  });
}
if (nameInput.length) {
  nameInput.forEach(input => {
    input.addEventListener('input', (e) => {
      saveField('name', e.target.value);
      nameInput.forEach(other => { if (other !== input) other.value = e.target.value; });
    });
  });
}
if (infoInput.length) {
  infoInput.forEach(input => {
    input.addEventListener('input', (e) => {
      saveField('message', e.target.value);
      infoInput.forEach(other => { if (other !== input) other.value = e.target.value; });
    });
  });
}

const submitBtns = document.querySelectorAll('button[type="submit"]')

if (submitBtns.length) {
  submitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      clearSavedField('email');
      clearSavedField('jobtitle');
      clearSavedField('name');
      clearSavedField('message');
      saveField('form-field-already_submitted', 'true');
    });
  });
}

// --- Product file reading and rendering ---
async function fetchText(url) {
  const response = await fetch(url);
  return await response.text();
}
async function fetchJSON(url) {
  const response = await fetch(url);
  return await response.json();
}

function addLineNumbers(text, isCode = false) {
  const lines = text.split(/\r?\n/);
  return lines.map((line, i) => {
    if (isCode) {
      return `<span class='line-num'>${i + 1}</span> ${line}`;
    }
    return `<span class='line-num'>${i + 1}</span> <span class='line-content'>${line}</span>`;
  }).join('\n');
}

function renderCSVBlock(csv) {
  // Escape HTML and show as pre block with line numbers
  const html = addLineNumbers(csv.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'));
  return `<pre class="product-csv">${html}</pre>`;
}

function renderJSONPretty(json) {
  // Pretty print JSON with syntax highlighting and line numbers
  const jsonString = JSON.stringify(json, null, 2);
  const escaped = jsonString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const tokenPattern = /(\"(?:\\.|[^"\\])*\"\s*:)|(\"(?:\\.|[^"\\])*\")|\b(true|false|null)\b|-?\d+(?:\.\d+)?/g;

  const highlighted = escaped.replace(tokenPattern, (match, keyCandidate) => {
    if (keyCandidate) {
      const key = match.replace(/\s*:\s*$/, '');
      return `<span class="json-key">${key}</span>:`;
    }
    if (match.startsWith('"')) {
      return `<span class="json-string">${match}</span>`;
    }
    if (/true|false|null/.test(match)) {
      return `<span class="json-boolean">${match}</span>`;
    }
    return `<span class="json-number">${match}</span>`;
  });

  const html = addLineNumbers(highlighted);
  return `<pre class="product-json">${html}</pre>`;
}

function renderSQLBlock(sql) {
  // Highlight SQL keywords and add line numbers, but keep code formatting
  const keywords = [
    'INSERT', 'INTO', 'VALUES', 'CREATE', 'TABLE', 'PRIMARY', 'KEY', 'NOT NULL', 'VARCHAR', 'SERIAL'
  ];
  // Escape HTML first
  let html = sql.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  // Now highlight keywords, strings, comments
  html = html.replace(/(--.*)/g, '<span class="sql-comment">$1</span>');
  html = html.replace(/(\b(?:' + keywords.join('|') + ')\b)/gi, '<span class="sql-keyword">$1</span>');
  html = html.replace(/('[^']*')/g, '<span class="sql-string">$1</span>');
  html = addLineNumbers(html, true);
  return `<pre class="product-sql">${html}</pre>`;
}

async function injectProductData() {
  // CSV
  try {
    const csv = await fetchText('/products.csv');
    const tab1 = document.getElementById('tab-content1');
    if (tab1) tab1.innerHTML = renderCSVBlock(csv);
  } catch (e) { }
  // JSON
  try {
    const json = await fetchJSON('/products.json');
    const tab2 = document.getElementById('tab-content2');
    if (tab2) tab2.innerHTML = renderJSONPretty(json);
  } catch (e) { }
  // SQL
  try {
    const sql = await fetchText('/products.sql');
    const tab3 = document.getElementById('tab-content3');
    if (tab3) tab3.innerHTML = renderSQLBlock(sql);
  } catch (e) { }
}
const tabButtons = document.querySelectorAll('#tab1,#tab2,#tab3');
const tabContents = document.querySelectorAll('#tab-content1, #tab-content2, #tab-content3');
const dataPlaceholder = document.getElementById('data-placeholder');
const dataFetchBtn = document.getElementById('extract-btn');
const overlay = document.getElementById('demo-overlay');
const fetchLoadText = document.getElementById('fetch-load-text');

let overlayIntervalId = null;
let dataLoaderActive = false;
const MIN_LOADING_TIME = 2200;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));


dataFetchBtn.addEventListener('click', () => {
  buttonClick('Data Extraction Demo Button');
});

const resetTabContents = () => {
  tabContents.forEach((content) => content.classList.add('hidden'));
};

const showOverlay = () => {
  if (!overlay) return;
  overlay.classList.remove('hidden');
  if (fetchLoadText) {
    fetchLoadText.textContent = 'Fetching data';
    overlayIntervalId = setInterval(() => {
      if (fetchLoadText.textContent.endsWith('...')) {
        fetchLoadText.textContent = 'Fetching data';
      } else {
        fetchLoadText.textContent += '.';
      }
    }, 500);
  }
};

const hideOverlay = () => {
  if (!overlay) return;
  overlay.classList.add('hidden');
  if (overlayIntervalId) {
    clearInterval(overlayIntervalId);
    overlayIntervalId = null;
  }
  if (fetchLoadText) {
    fetchLoadText.textContent = 'Fetching data';
  }
};

const revealTabs = () => {
  tabButtons.forEach((tab) => tab.classList.remove('hidden'));
};

const hidePlaceholder = () => {
  if (!dataPlaceholder) return;
  dataPlaceholder.classList.add('is-hidden');
  dataPlaceholder.setAttribute('aria-hidden', 'true');
};

const handleDataExtraction = async () => {
  dataFetchBtn.disabled = true;
  dataFetchBtn.style.background = "rgba(255, 153, 0, 0.2)";
  document.querySelector('.demo-text-block').style.display = 'none';
  if (dataLoaderActive) return;
  dataLoaderActive = true;
  resetTabContents();
  showOverlay();
  await Promise.all([injectProductData(), wait(MIN_LOADING_TIME)]);
  hidePlaceholder();
  revealTabs();
  if (typeof window.showTab === 'function') {
    window.showTab(1);
  } else {
    tabContents[0]?.classList.remove('hidden');
  }
  hideOverlay();
  dataLoaderActive = false;
};

dataFetchBtn?.addEventListener('click', handleDataExtraction);

function preventScroll(e) {
  e.preventDefault();
}

// document.querySelectorAll('#tab-content1, #tab-content2, #tab-content3').forEach(elem => {
//   elem.addEventListener('wheel', preventScroll, { passive: false });
//   elem.addEventListener('touchmove', preventScroll, { passive: false });

//   elem.addEventListener('click', (e) => {
//     elem.removeEventListener('wheel', preventScroll);
//     elem.removeEventListener('touchmove', preventScroll);
//   });
// });

const initTestimonialsCarousel = () => {
  const container = document.querySelector('.testimonials__grid');
  if (!container) return;

  const cards = Array.from(container.querySelectorAll('.testimonial'));
  if (cards.length > 3) {
    cards.slice(3).forEach((card) => {
      card.parentElement?.removeChild(card);
    });
  }

  if (container.dataset.carouselReady === 'true') return;
  container.dataset.carouselReady = 'true';

  const prevButton = document.querySelector('[data-testimonials-prev]');
  const nextButton = document.querySelector('[data-testimonials-next]');
  if (!prevButton && !nextButton) return;

  const getStepWidth = () => {
    const firstCard = container.querySelector('.testimonial');
    if (!firstCard) return 0;
    const styles = window.getComputedStyle(container);
    const gapValue = parseFloat(styles.getPropertyValue('gap') || '0');
    return firstCard.getBoundingClientRect().width + (Number.isNaN(gapValue) ? 0 : gapValue);
  };

  const scrollByStep = (direction) => {
    const step = getStepWidth();
    if (!step) return;
    container.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  prevButton?.addEventListener('click', () => scrollByStep(-1));
  nextButton?.addEventListener('click', () => scrollByStep(1));

  const syncControls = () => {
    const maxScroll = container.scrollWidth - container.clientWidth;
    if (prevButton) {
      prevButton.disabled = container.scrollLeft <= 2;
    }
    if (nextButton) {
      nextButton.disabled = container.scrollLeft >= maxScroll - 2;
    }
  };

  container.addEventListener('scroll', syncControls, { passive: true });
  window.addEventListener('resize', syncControls);
  syncControls();
};

initTestimonialsCarousel();