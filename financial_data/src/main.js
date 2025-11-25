import "./style.css";

const header = document.querySelector(".header");
const burgerButton = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

const form = document.querySelector('.cta__form');
console.log(form)

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch('https://mridata.pro/contact', {
      method: 'POST',
      body: data,
    });

    if (response.ok) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error sending form:', error);
  }
  alert("Thank you! Our manager will contact you shortly.")
});

document.querySelectorAll(".icon").forEach((svg) => {
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("role", "img");
});

const toggleMenu = (force) => {
  if (!burgerButton || !mobileMenu) {
    return;
  }

  const isOpen = burgerButton.getAttribute("aria-expanded") === "true";
  const nextState = force ?? !isOpen;
  burgerButton.setAttribute("aria-expanded", String(nextState));
  mobileMenu.classList.toggle("mobile-menu--open", nextState);
  mobileMenu.setAttribute("aria-hidden", String(!nextState));
  document.body.style.overflow = nextState ? "hidden" : "";
};

if (burgerButton) {
  burgerButton.addEventListener("click", () => {
    const expanded = burgerButton.getAttribute("aria-expanded") === "true";
    toggleMenu(!expanded);
  });
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    toggleMenu(false);
  }
});

window.addEventListener("scroll", () => {
  if (!header) {
    return;
  }

  const scrolled = window.scrollY > 30;
  header.classList.toggle("header--scrolled", scrolled);
});

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-item__button");
  const content = item.querySelector(".faq-item__content");

  if (!button || !content) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");
    faqItems.forEach((other) => {
      if (other === item) {
        return;
      }

      other.classList.remove("is-open");
      const otherButton = other.querySelector(".faq-item__button");
      const otherContent = other.querySelector(".faq-item__content");
      if (otherButton && otherContent) {
        otherButton.setAttribute("aria-expanded", "false");
        otherContent.setAttribute("aria-hidden", "true");
        otherContent.style.maxHeight = "0";
      }
    });

    item.classList.toggle("is-open", !isOpen);
    button.setAttribute("aria-expanded", String(!isOpen));
    content.setAttribute("aria-hidden", String(isOpen));
    content.style.maxHeight = !isOpen ? `${content.scrollHeight}px` : "0";
  });
});

if (window.innerWidth >= 768) {
  toggleMenu(false);
}

const yearTarget = document.querySelector("#current-year");
if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

function initUIAnimations() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  const revealSelectors = [
    ".card",
    ".metric",
    ".testimonial-card",
    ".process-step",
    ".value-prop__benefit",
    ".hero__content",
    ".hero__visual",
    ".cta",
    ".faq-item",
    ".use-case",
    ".advantages-card"
  ];

  const nodes = document.querySelectorAll(revealSelectors.join(", "));
  nodes.forEach((el, i) => {
    el.classList.add("reveal");
    const delay = (i % 6) + 1;
    el.classList.add(`reveal--delay-${delay}`);
    observer.observe(el);
  });

  const digits = document.querySelectorAll(".metric__value");
  digits.forEach((el) => {
    const raw = el.textContent.trim();
    const match = raw.match(/(\d+[\d,.]*)/);
    if (!match) {
      return;
    }

    const targetStr = match[0].replace(/[,]/g, "");
    const target = parseInt(targetStr, 10);
    if (Number.isNaN(target) || target <= 0) {
      return;
    }
    const suffix = raw.replace(match[0], "");

    let rafId = null;
    const duration = 1200;
    const t0 = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
      }
    };

    const startObserver = new IntersectionObserver((entries, so) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          rafId = requestAnimationFrame(step);
          so.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    startObserver.observe(el);
  });

  const hero = document.querySelector(".hero");
  const visual = document.querySelector(".hero__visual");
  if (hero && visual && window.matchMedia("(hover: hover) and (min-width: 48rem)").matches) {
    hero.addEventListener("pointermove", (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
      const offsetX = x * 8;
      const offsetY = y * 8;
      visual.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
    });

    hero.addEventListener("pointerleave", () => {
      visual.style.transform = "";
    });
  }
}

window.requestAnimationFrame(initUIAnimations);
