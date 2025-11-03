import "./style.css";

const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-menu-toggle]");
const header = document.querySelector("[data-header]");

const closeMobileMenu = () => {
	if (!nav) {
		return;
	}
	nav.classList.remove("is-open");
	if (toggle) {
		toggle.setAttribute("aria-expanded", "false");
	}
};

if (toggle && nav) {
	toggle.addEventListener("click", () => {
		const isOpen = nav.classList.toggle("is-open");
		toggle.setAttribute("aria-expanded", String(isOpen));
		toggle.classList.toggle("is-open", isOpen);
	});

	nav.querySelectorAll("a").forEach((link) => {
		link.addEventListener("click", () => {
			if (window.innerWidth <= 768) {
				closeMobileMenu();
			}
		});
	});
}

window.addEventListener("scroll", () => {
	if (!header) {
		return;
	}
	const shouldElevate = window.scrollY > 20;
	header.classList.toggle("is-scrolled", shouldElevate);
});

const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
	const question = item.querySelector(".faq-question");
	const answer = item.querySelector(".faq-answer");
	if (!question || !answer) {
		return;
	}

	question.addEventListener("click", () => {
		const isExpanded = question.getAttribute("aria-expanded") === "true";
		question.setAttribute("aria-expanded", String(!isExpanded));
		if (!isExpanded) {
			answer.style.maxHeight = `${answer.scrollHeight}px`;
		} else {
			answer.style.maxHeight = "0";
		}
	});
});

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll("[data-tab-panel]");

const activateTab = (target) => {
	tabButtons.forEach((button) => {
		const isActive = button.dataset.tab === target;
		button.classList.toggle("is-active", isActive);
		button.setAttribute("aria-selected", String(isActive));
		button.setAttribute("tabindex", isActive ? "0" : "-1");
	});

	tabPanels.forEach((panel) => {
		const isActive = panel.dataset.tabPanel === target;
		panel.classList.toggle("is-active", isActive);
		panel.hidden = !isActive;
	});
};

if (tabButtons.length > 0) {
	tabPanels.forEach((panel) => {
		panel.hidden = !panel.classList.contains("is-active");
	});

	tabButtons.forEach((button) => {
		button.addEventListener("click", () => {
			activateTab(button.dataset.tab);
		});

		button.addEventListener("keydown", (event) => {
			if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
				return;
			}

			const buttons = Array.from(tabButtons);
			const currentIndex = buttons.indexOf(button);
			let nextIndex = currentIndex;

			if (event.key === "ArrowLeft") {
				nextIndex = currentIndex === 0 ? buttons.length - 1 : currentIndex - 1;
			}

			if (event.key === "ArrowRight") {
				nextIndex = currentIndex === buttons.length - 1 ? 0 : currentIndex + 1;
			}

			const nextButton = buttons[nextIndex];
			nextButton.focus();
			activateTab(nextButton.dataset.tab);
		});
	});
}

const ctaForm = document.querySelector("#cta-form");
const ctaFeedback = document.querySelector("#cta-feedback");

if (ctaForm && ctaFeedback) {
	ctaForm.addEventListener("submit", (event) => {
		event.preventDefault();

		ctaFeedback.textContent = "";
		ctaFeedback.classList.remove("is-success", "is-error");

		const formData = new FormData(ctaForm);
		const name = String(formData.get("name") || "").trim();
		const email = String(formData.get("email") || "").trim();
		const website = String(formData.get("website") || "").trim();
		const message = String(formData.get("message") || "").trim();

		const errors = [];
		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!name) {
			errors.push("Please share your name.");
		}

		if (!email || !emailPattern.test(email)) {
			errors.push("Enter a valid work email.");
		}

		if (!message) {
			errors.push("Tell us more about your data goals.");
		}

		if (website) {
			try {
				new URL(website);
			} catch (error) {
				errors.push("Provide a valid URL or leave the field empty.");
			}
		}

		if (errors.length > 0) {
			ctaFeedback.textContent = errors.join(" ");
			ctaFeedback.classList.add("is-error");
			return;
		}

		ctaFeedback.textContent = "Thank you! A DataForge specialist will reach out within one business day.";
		ctaFeedback.classList.add("is-success");
		ctaForm.reset();
	});
}

window.addEventListener("resize", () => {
	if (window.innerWidth > 768) {
		closeMobileMenu();
	}

	faqItems.forEach((item) => {
		const question = item.querySelector(".faq-question");
		const answer = item.querySelector(".faq-answer");
		if (!question || !answer) {
			return;
		}

		if (question.getAttribute("aria-expanded") === "true") {
			answer.style.maxHeight = `${answer.scrollHeight}px`;
		}
	});
});
