// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.querySelector('.menu-toggle');
	const navMenu = document.querySelector('.nav-menu');

	if (menuToggle && navMenu) {
		menuToggle.addEventListener('click', () => {
			navMenu.classList.toggle('active');
		});
	}

	// Close menu when clicking outside
	document.addEventListener('click', (e) => {
		if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
			navMenu.classList.remove('active');
		}
	});

	// Smooth scroll for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href !== '#' && href.length > 1) {
				e.preventDefault();
				const targetId = href.substring(1);
				const targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
					navMenu.classList.remove('active');
				}
			}
		});
	});

	// Form submission handling
	const contactForm = document.getElementById('contactForm');
	if (contactForm) {
		contactForm.addEventListener('submit', (e) => {
			e.preventDefault();
			const submitButton = contactForm.querySelector('.submit-button');
			const originalText = submitButton.textContent;
			submitButton.textContent = 'Sending...';
			submitButton.disabled = true;

			setTimeout(() => {
				submitButton.textContent = 'Request Sent!';
				submitButton.style.background = '#28a745';
				setTimeout(() => {
					contactForm.reset();
					submitButton.textContent = originalText;
					submitButton.disabled = false;
					submitButton.style.background = '';
				}, 3000);
			}, 1000);
		});
	}

	// CTA buttons scroll to contact form
	document.querySelectorAll('.cta-button:not(.submit-button)').forEach(button => {
		button.addEventListener('click', () => {
			const contactSection = document.getElementById('contact');
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});

	document.querySelectorAll('.secondary-cta').forEach(button => {
		button.addEventListener('click', () => {
			const contactSection = document.getElementById('contact');
			if (contactSection) {
				contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});
});