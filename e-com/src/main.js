import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import './style.css'

const navTrigger = document.querySelector('.nav__trigger')
const navMenu = document.querySelector('.nav__menu')
const navLinks = document.querySelectorAll('.nav__link')
const header = document.querySelector('[data-header]')
const animatedItems = document.querySelectorAll('[data-animate]')
const detailsItems = document.querySelectorAll('.faq__item')
const yearTarget = document.querySelector('[data-year]')
const ctaForm = document.querySelector('.final-cta__form')
const formStatus = document.querySelector('.final-cta__form-status')

const toggleNavigation = () => {
  if (!navTrigger || !navMenu) return
  const expanded = navTrigger.getAttribute('aria-expanded') === 'true'
  navTrigger.setAttribute('aria-expanded', String(!expanded))
  navTrigger.classList.toggle('is-active')
  navMenu.classList.toggle('is-open')
  document.body.classList.toggle('no-scroll', !expanded)
}

if (navTrigger && navMenu) {
  navTrigger.addEventListener('click', toggleNavigation)
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('is-open')) {
        toggleNavigation()
      }
    })
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
    toggleNavigation()
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navMenu?.classList.contains('is-open')) {
    toggleNavigation()
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
