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
