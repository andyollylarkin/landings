import handleKeydown from "../../libs/keydown_handler.js";
import handleNoPageAction from "../../libs/handle_mouse_drag.js";
import { saveField, getSavedField, clearSavedField } from "../../libs/save-field.js";

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
const ctaForm = document.querySelector('.final-cta__form')
const formStatus = document.querySelector('.final-cta__form-status')

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

if (ctaForm) {
  ctaForm.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!ctaForm.checkValidity()) {
      ctaForm.reportValidity()
      return
    }

    if (formStatus) {
      formStatus.textContent = 'Thanks! We will reach out within one business day.'
    }

    ctaForm.reset()
  })

  ctaForm.addEventListener('input', () => {
    if (formStatus) {
      formStatus.textContent = ''
    }
  })
}

const emailInput = document.querySelectorAll('input[name="email"]');
const jobTitleInput = document.querySelectorAll('input[name="job-title"]');
const nameInput = document.querySelectorAll('input[name="name"]');
const infoInput = document.querySelectorAll('textarea[name="project"]');

document.addEventListener('DOMContentLoaded', function () {
  const savedEmail = getSavedField('email');
  if (savedEmail && emailInput.length) {
    emailInput.forEach(input => { input.value = savedEmail; });
  }
  const savedJobTitle = getSavedField('job-title');
  if (savedJobTitle && jobTitleInput.length) {
    jobTitleInput.forEach(input => { input.value = savedJobTitle; });
  }
  const savedName = getSavedField('name');
  if (savedName && nameInput.length) {
    nameInput.forEach(input => { input.value = savedName; });
  }
  const savedInfo = getSavedField('project');
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
      saveField('job-title', e.target.value);
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
      saveField('project', e.target.value);
      infoInput.forEach(other => { if (other !== input) other.value = e.target.value; });
    });
  });
}

const submitBtns = document.querySelectorAll('button[type="submit"]')

if (submitBtns.length) {
  submitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      clearSavedField('email');
      clearSavedField('job-title');
      clearSavedField('name');
      clearSavedField('project');
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
  const escaped = jsonString.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  let html = escaped.replace(/("[^"]*")(?=:)/g, '<span class="json-key">$1</span>')
    .replace(/("[^"]*")/g, '<span class="json-string">$1</span>')
    .replace(/\b(true|false|null)\b/g, '<span class="json-boolean">$1</span>')
    .replace(/(\d+\.?\d*)/g, '<span class="json-number">$1</span>');
  html = addLineNumbers(html);
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
    const csv = await fetchText('/public/products.csv');
    const tab1 = document.getElementById('tab-content1');
    if (tab1) tab1.innerHTML = renderCSVBlock(csv);
  } catch (e) { }
  // JSON
  try {
    const json = await fetchJSON('/public/products.json');
    const tab2 = document.getElementById('tab-content2');
    if (tab2) tab2.innerHTML = renderJSONPretty(json);
  } catch (e) { }
  // SQL
  try {
    const sql = await fetchText('/public/products.sql');
    const tab3 = document.getElementById('tab-content3');
    if (tab3) tab3.innerHTML = renderSQLBlock(sql);
  } catch (e) { }
}

document.addEventListener('DOMContentLoaded', injectProductData);


const dataFetchBtn = document.getElementById('extract-btn')
const overlay = document.getElementById('demo-overlay')
const fetchLoadText = document.getElementById('fetch-load-text')

dataFetchBtn?.addEventListener('click', () => {
  if (overlay) {
    overlay.classList.remove('hidden');
    let intervalId;
    if (fetchLoadText) {
      intervalId = setInterval(() => {
        if (fetchLoadText.textContent.endsWith('...')) {
          fetchLoadText.textContent = 'Fetching data';
        } else {
          fetchLoadText.textContent += '.';
        }
      }, 500);
    }
    setTimeout(() => {
      if (intervalId) clearInterval(intervalId);
      overlay.classList.add('hidden');
    }, 3000);
  }
})