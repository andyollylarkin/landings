const header = document.getElementById('siteHeader');
const mobileBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');
const yearSpan = document.getElementById('year');

// Sticky header background change
function onScroll() {
	if (window.scrollY > 40) header.classList.add('scrolled');
	else header.classList.remove('scrolled');
}
window.addEventListener('scroll', onScroll);
onScroll();

// Mobile menu toggle
if (mobileBtn && mainNav) {
	mobileBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		mainNav.classList.toggle('open');
		mobileBtn.classList.toggle('open');
	});

	// Close menu when clicking on a link
	mainNav.querySelectorAll('a').forEach(link => {
		link.addEventListener('click', () => {
			mainNav.classList.remove('open');
			mobileBtn.classList.remove('open');
		});
	});

	// Close menu when clicking outside
	document.addEventListener('click', (e) => {
		if (!mainNav.contains(e.target) && !mobileBtn.contains(e.target)) {
			mainNav.classList.remove('open');
			mobileBtn.classList.remove('open');
		}
	});
}

// Testimonial carousel
const testimonials = [...document.querySelectorAll('.testimonial-card')];
const dots = [...document.querySelectorAll('.dot')];
let tIndex = 0;
const prevBtn = document.getElementById('prevTest');
const nextBtn = document.getElementById('nextTest');

function showTest(i) {
	testimonials.forEach((el, idx) => {
		el.classList.toggle('active', idx === i);
	});
	dots.forEach((dot, idx) => {
		dot.classList.toggle('active', idx === i);
	});
}

if (testimonials.length) {
	showTest(tIndex);
	nextBtn?.addEventListener('click', () => {
		tIndex = (tIndex + 1) % testimonials.length;
		showTest(tIndex);
	});
	prevBtn?.addEventListener('click', () => {
		tIndex = (tIndex - 1 + testimonials.length) % testimonials.length;
		showTest(tIndex);
	});
	dots.forEach((dot, idx) => {
		dot.addEventListener('click', () => {
			tIndex = idx;
			showTest(tIndex);
		});
	});

	// Auto-rotate every 5 seconds
	setInterval(() => {
		tIndex = (tIndex + 1) % testimonials.length;
		showTest(tIndex);
	}, 5000);
}

// Year in footer
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
	a.addEventListener('click', (e) => {
		const href = a.getAttribute('href');
		if (href.length > 1) {
			e.preventDefault();
			const target = document.querySelector(href);
			target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	});
});

// Scroll animations
const observerOptions = {
	threshold: 0.1,
	rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
			observer.unobserve(entry.target);
		}
	});
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .feature-block, .stat').forEach(el => {
	el.style.opacity = '0';
	observer.observe(el);
});

// Parallax effect for hero
window.addEventListener('scroll', () => {
	const scrolled = window.pageYOffset;
	const heroVisual = document.querySelector('.hero-visual');
	if (heroVisual && scrolled < 600) {
		heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
	}
});
