import "./style.css";

const header = document.querySelector(".header");
const burgerButton = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

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
  const nextState = typeof force === "boolean" ? force : !isOpen;

  burgerButton.setAttribute("aria-expanded", String(nextState));
  mobileMenu.classList.toggle("mobile-menu--open", nextState);
  mobileMenu.setAttribute("aria-hidden", String(!nextState));
  document.body.style.overflow = nextState ? "hidden" : "";
};

toggleMenu(false);

if (mobileMenu) {
  requestAnimationFrame(() => {
    mobileMenu.classList.add("mobile-menu--ready");
  });
}

if (burgerButton) {
  burgerButton.addEventListener("click", () => {
    const isOpen = burgerButton.getAttribute("aria-expanded") === "true";
    toggleMenu(!isOpen);
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

const desktopQuery = window.matchMedia("(min-width: 48rem)");
if (desktopQuery.matches) {
  toggleMenu(false);
}

desktopQuery.addEventListener("change", (event) => {
  if (event.matches) {
    toggleMenu(false);
  }
});

const hero = document.querySelector(".hero");
const visual = document.querySelector(".hero__visual");

const handlePointerMove = (event) => {
  if (!hero || !visual) {
    return;
  }

  const rect = hero.getBoundingClientRect();
  const x = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
  const y = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
  const offsetX = x * 8;
  const offsetY = y * 8;
  visual.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
};

const handlePointerLeave = () => {
  if (!visual) {
    return;
  }

  visual.style.transform = "";
};

const hoverQuery = window.matchMedia("(hover: hover) and (min-width: 48rem)");

const syncParallax = () => {
  if (!hero || !visual) {
    return;
  }

  hero.removeEventListener("pointermove", handlePointerMove);
  hero.removeEventListener("pointerleave", handlePointerLeave);

  if (hoverQuery.matches) {
    hero.addEventListener("pointermove", handlePointerMove);
    hero.addEventListener("pointerleave", handlePointerLeave);
  } else {
    visual.style.transform = "";
  }
};

syncParallax();
hoverQuery.addEventListener("change", syncParallax);
