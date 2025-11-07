import './style.css'

// Header scroll effect
const header = document.querySelector('.site-header')
if (header) {
	const setHeaderState = () => {
		if (window.scrollY > 8) {
			header.classList.add('is-scrolled')
		} else {
			header.classList.remove('is-scrolled')
		}
	}
	window.addEventListener('scroll', setHeaderState)
	setHeaderState()
}

// Navigation toggle
const nav = document.querySelector('.site-nav')
const navToggle = document.querySelector('.nav-toggle')
const body = document.body

if (nav && navToggle) {
	const toggleNav = () => {
		const expanded = navToggle.getAttribute('aria-expanded') === 'true'
		navToggle.setAttribute('aria-expanded', String(!expanded))
		nav.classList.toggle('is-open', !expanded)
		body.classList.toggle('no-scroll', !expanded)
	}

	navToggle.addEventListener('click', toggleNav)

	nav.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			if (nav.classList.contains('is-open')) {
				toggleNav()
			}
		})
	})
}

// Mobile CTA
const mobileCta = document.querySelector('.mobile-cta')
const heroSection = document.querySelector('.hero')
const finalCta = document.querySelector('.cta-closing')
const closeMobileCta = document.querySelector('.mobile-cta-close')
let mobileDismissed = false

if (mobileCta && closeMobileCta) {
	const mobileObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (mobileDismissed) {
					return
				}
				if (!entry.isIntersecting) {
					mobileCta.classList.add('is-visible')
				} else {
					mobileCta.classList.remove('is-visible')
				}
			})
		},
		{ rootMargin: '-120px 0px 0px 0px' }
	)

	if (heroSection) {
		mobileObserver.observe(heroSection)
	}

	if (finalCta) {
		const finalObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						mobileCta.classList.remove('is-visible')
					}
				})
			},
			{ threshold: 0.2 }
		)
		finalObserver.observe(finalCta)
	}

	closeMobileCta.addEventListener('click', () => {
		mobileDismissed = true
		mobileCta.classList.remove('is-visible')
	})
}

// Modal functionality
const focusableSelectors =
	'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

let activeModal = null
let lastFocusedElement = null

const getFocusableElements = (container) =>
	Array.from(container.querySelectorAll(focusableSelectors)).filter((element) =>
		!(element.offsetParent === null && getComputedStyle(element).position !== 'fixed')
	)

const handleKeydown = (event) => {
	if (!activeModal) {
		return
	}
	if (event.key === 'Escape') {
		event.preventDefault()
		closeModal()
		return
	}
	if (event.key !== 'Tab') {
		return
	}
	const focusable = getFocusableElements(activeModal)
	if (!focusable.length) {
		return
	}
	const first = focusable[0]
	const last = focusable[focusable.length - 1]
	if (event.shiftKey) {
		if (document.activeElement === first) {
			event.preventDefault()
			last.focus()
		}
		return
	}
	if (document.activeElement === last) {
		event.preventDefault()
		first.focus()
	}
}

const openModal = (modalId) => {
	const modal = document.querySelector(`[data-modal-id="${modalId}"]`)
	if (!modal) {
		return
	}
	lastFocusedElement = document.activeElement
	activeModal = modal
	modal.classList.add('is-open')
	modal.setAttribute('aria-hidden', 'false')
	body.classList.add('modal-open')
	const status = modal.querySelector('.form-status')
	if (status) {
		status.textContent = ''
		status.classList.remove('is-visible')
	}
	const form = modal.querySelector('form')
	if (form) {
		form.classList.remove('is-success')
	}
	const focusable = getFocusableElements(modal)
	if (focusable.length) {
		focusable[0].focus()
	}
	document.addEventListener('keydown', handleKeydown)
}

const closeModal = () => {
	if (!activeModal) {
		return
	}
	activeModal.classList.remove('is-open')
	activeModal.setAttribute('aria-hidden', 'true')
	body.classList.remove('modal-open')
	document.removeEventListener('keydown', handleKeydown)
	if (lastFocusedElement) {
		lastFocusedElement.focus()
	}
	activeModal = null
	lastFocusedElement = null
}

document.querySelectorAll('.js-modal-trigger').forEach((trigger) => {
	trigger.addEventListener('click', () => {
		const target = trigger.getAttribute('data-modal-target')
		if (target) {
			openModal(target)
		}
	})
})

document.querySelectorAll('[data-modal-close="true"]').forEach((closer) => {
	closer.addEventListener('click', (event) => {
		event.preventDefault()
		closeModal()
	})
})

document.querySelectorAll('.modal-window').forEach((panel) => {
	panel.addEventListener('click', (event) => {
		event.stopPropagation()
	})
})

// Contact form
const contactForm = document.querySelector('#contact-form')
const formStatus = contactForm?.querySelector('.form-status')

if (contactForm && formStatus) {
	contactForm.addEventListener('submit', (event) => {
		event.preventDefault()
		formStatus.textContent = 'Thanks! Our manager will reach out within one business day.'
		formStatus.classList.add('is-visible')
		contactForm.classList.add('is-success')
		contactForm.reset()
	})
}

// FAQ accordion
document.querySelectorAll('.faq-item').forEach((item) => {
	const trigger = item.querySelector('.faq-question')
	const answer = item.querySelector('.faq-answer')
	if (!trigger || !answer) {
		return
	}
	answer.style.maxHeight = '0px'

	const toggleFaq = (open) => {
		trigger.setAttribute('aria-expanded', String(open))
		item.classList.toggle('is-open', open)
		if (open) {
			answer.style.maxHeight = `${answer.scrollHeight}px`
		} else {
			answer.style.maxHeight = `${answer.scrollHeight}px`
			requestAnimationFrame(() => {
				answer.style.maxHeight = '0px'
			})
		}
	}

	trigger.addEventListener('click', () => {
		const isOpen = item.classList.contains('is-open')
		toggleFaq(!isOpen)
	})

	answer.addEventListener('transitionend', (event) => {
		if (event.propertyName !== 'max-height') {
			return
		}
		if (item.classList.contains('is-open')) {
			answer.style.maxHeight = 'none'
			return
		}
		answer.style.maxHeight = '0px'
	})
})

// Animation on scroll
const animatedElements = document.querySelectorAll('[data-animate]')
if (animatedElements.length) {
	const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
	if (prefersReducedMotion.matches) {
		animatedElements.forEach((element) => element.classList.add('is-animated'))
	} else {
		const animateObserver = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('is-animated')
						animateObserver.unobserve(entry.target)
					}
				})
			},
			{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
		)
		animatedElements.forEach((element) => animateObserver.observe(element))
	}
}

// Update copyright year
const copyrightElement = document.getElementById('copyright-year')
if (copyrightElement) {
	copyrightElement.textContent = `© ${new Date().getFullYear()} MRI Data. All rights reserved.`
}