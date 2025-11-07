import "./style.css";

const iconPaths = {
  target: `
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <path d="M12 3v2" />
    <path d="M12 19v2" />
    <path d="M3 12h2" />
    <path d="M19 12h2" />
  `,
  arrowRight: `
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  `,
  play: `
    <path d="M8.5 6.5l9 5.5-9 5.5V6.5Z" fill="currentColor" stroke="none" />
  `,
  gear: `
    <path d="M10.4 3.5 9.8 5.8 8 6.6l-2-.8-1.5 2.6 1.6 1.2-.1 1.9-1.5 1 1.5 2.6 1.9-.6 1.5 1.2.6 2.3h3.1l.6-2.3 1.5-1.2 1.9.6 1.5-2.6-1.5-1 .1-1.9 1.6-1.2-1.5-2.6-2 .8-1.8-.8-.6-2.3h-3.2Z" fill="none" />
    <circle cx="12" cy="12" r="3.5" />
  `,
  unlock: `
    <path d="M16 10V7a4 4 0 0 0-8 0" />
    <rect x="6" y="10" width="12" height="11" rx="2" />
    <path d="M12 15v2" />
    <circle cx="12" cy="14" r="1" />
  `,
  shieldCheck: `
    <path d="M12 3 5 6v6c0 4.5 3.2 8.6 7 9.5 3.8-.9 7-5 7-9.5V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  `,
  chart: `
    <path d="M4 20h16" />
    <rect x="6.5" y="11" width="2.5" height="6" rx="0.6" />
    <rect x="10.75" y="8" width="2.5" height="9" rx="0.6" />
    <rect x="15" y="5" width="2.5" height="12" rx="0.6" />
  `,
  bolt: `
    <path d="M13 2 5 13h5l-1 9 8-11h-5l1-9Z" />
  `,
  check: `
    <path d="m5 12 4 4 10-10" />
  `,
  wrench: `
    <path d="M21 5.5 18 8l-3-3 3-3a5 5 0 1 0 3 3.5Z" />
    <path d="M3 21l7.5-7.5" />
    <circle cx="9.5" cy="11.5" r="0.75" />
  `,
  rocket: `
    <path d="M15 21H9l1-5h4l1 5Z" />
    <path d="M12 3c2.6 2 4 4.5 4 7.5 0 3.8-2.2 6.5-4 6.5s-4-2.7-4-6.5C8 7.5 9.4 5 12 3Z" />
    <path d="M9 18h6" />
    <circle cx="12" cy="9.5" r="1.5" />
  `,
  lock: `
    <rect x="6" y="11" width="12" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    <path d="M12 15v2" />
  `,
  star: `
    <path d="m12 4 2 4.6 5 .7-3.7 3.6.9 5-4.2-2.3-4.2 2.3.9-5L5 9.3l5-.7 2-4.6Z" />
  `,
  clipboard: `
    <rect x="5" y="5" width="14" height="16" rx="2" />
    <path d="M9 3h6" />
    <path d="M9 8h6" />
    <path d="M9 12h6" />
  `,
  layers: `
    <path d="m12 4 8 4-8 4-8-4 8-4Z" />
    <path d="m4 12 8 4 8-4" />
    <path d="m4 16 8 4 8-4" />
  `,
  refresh: `
    <path d="M20 11A8 8 0 1 0 6 18" />
    <path d="M20 4v7h-7" />
  `,
  users: `
    <path d="M16 18v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" />
    <circle cx="10" cy="8" r="3" />
    <path d="M20 18v-1c0-1.5-.6-2.9-1.6-3.9" />
    <path d="M15.5 4.8a3 3 0 0 1 0 6" />
  `,
  dollar: `
    <path d="M12 3v18" />
    <path d="M16 7a4 4 0 0 0-8 0c0 2.2 1.8 3 4 3s4 .8 4 3-1.8 3-4 3-4 .8-4 3a4 4 0 0 0 8 0" />
  `,
  envelope: `
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  `,
  phone: `
    <path d="M6.5 3h2.8l1.6 4-2.2 1.3a13.5 13.5 0 0 0 6.5 6.5l1.3-2.2 4 1.6v2.8a2 2 0 0 1-2.2 2 14.5 14.5 0 0 1-11.8-11.8 2 2 0 0 1 2-2.2Z" />
  `,
  paperPlane: `
    <path d="m3 11 18-8-6.4 17-2.7-5.4L7.5 12 15 9" />
  `
};

const icon = (name, options = {}) => {
  const content = iconPaths[name];
  if (!content) {
    return "";
  }

  const { size = 24, strokeWidth = 1.75 } = options;
  return `
    <svg class="icon icon--${name}" width="${size}" height="${size}" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false" stroke-width="${strokeWidth}">
      ${content}
    </svg>
  `;
};

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#cases" },
  { label: "Advantages", href: "#advantages" },
  { label: "About Us", href: "#about" }
];

const heroMetrics = [
  { value: "500+", label: "Delivered projects" },
  { value: "98%", label: "Client satisfaction" },
  { value: "24/7", label: "Dedicated support" }
];

const trustLogos = [
  "E-commerce",
  "Finance",
  "Realty",
  "Marketing",
  "Analytics",
  "Logistics"
];

const problems = [
  {
    icon: "gear",
    title: "Automated data collection",
    description:
      "Replace manual, error-prone research with resilient scrapers that operate around the clock without supervision."
  },
  {
    icon: "unlock",
    title: "Access to complex sources",
    description:
      "Extract mission-critical information hidden behind dynamic interfaces, authenticated flows, or non-standard endpoints."
  },
  {
    icon: "shieldCheck",
    title: "Advanced anti-bot bypass",
    description:
      "Design adaptive strategies for CAPTCHA, geo blocks, rotating fingerprints, and JavaScript-rendered content."
  },
  {
    icon: "chart",
    title: "Scalable infrastructure",
    description:
      "Delegate orchestration, monitoring, and delivery to our team so you can scale without building in-house expertise."
  },
  {
    icon: "bolt",
    title: "Speed to insight",
    description:
      "Receive raw and normalized datasets ready for analytics, growth, and sales teams to act on immediately."
  }
];

const useCases = [
  {
    number: "01",
    title: "Lead generation and CRM enrichment",
    description:
      "Automate prospect discovery and maintain accurate records for decision makers and key accounts across industries."
  },
  {
    number: "02",
    title: "Competitor monitoring and price intelligence",
    description:
      "Track product catalogs and price changes in near real time to respond to market moves ahead of competitors."
  },
  {
    number: "03",
    title: "Market analytics and trend detection",
    description:
      "Collect large-scale datasets to power predictive models, strategic planning, and opportunity scouting."
  },
  {
    number: "04",
    title: "Database completion and maintenance",
    description:
      "Keep product, partner, and reference directories current without expanding your internal operations team."
  },
  {
    number: "05",
    title: "Demand and sentiment research",
    description:
      "Mine reviews, forums, and social channels to uncover emerging signals, sentiment shifts, and brand insights."
  }
];

const advantages = [
  {
    icon: "check",
    title: "Clean, actionable output",
    description:
      "Deliver only the fields and formats you need, validated and ready for downstream automation."
  },
  {
    icon: "wrench",
    title: "Complexity handled",
    description:
      "From storefront scraping to multi-level enterprise systems, we tailor architecture to every constraint."
  },
  {
    icon: "rocket",
    title: "Rapid launch",
    description:
      "Move from discovery to production swiftly with proven tooling and experienced engineers."
  },
  {
    icon: "lock",
    title: "Security and compliance",
    description:
      "Operate within legal frameworks and safeguard sensitive data throughout the engagement lifecycle."
  }
];

const testimonials = [
  {
    initials: "AM",
    author: "Alexey Morozov",
    role: "Head of Analytics, E-commerce Platform",
    quote:
      "MRI Data automated daily competitor price monitoring, letting us adapt instantly and lift margin by 15%."
  },
  {
    initials: "MS",
    author: "Maria Sokolova",
    role: "Growth Director, Real Estate Analytics",
    quote:
      "The team consolidated property data from dozens of sources with impressive stability and quality. A trusted partner."
  },
  {
    initials: "DV",
    author: "Dmitry Volkov",
    role: "CTO, Marketing Agency",
    quote:
      "After testing multiple vendors, only MRI Data overcame every protection and delivered a reliable data pipeline."
  }
];

const processSteps = [
  {
    number: "1",
    title: "Requirement discovery",
    icon: "clipboard",
    description: "Collaborate on goals, target sources, scope, and success criteria before work begins.",
    bullets: [
      "Define outcomes and KPIs",
      "Audit data structures and availability",
      "Estimate complexity and delivery timeline",
      "Produce a transparent technical brief"
    ]
  },
  {
    number: "2",
    title: "Solution design",
    icon: "layers",
    description: "Architect extraction workflows and resilience strategies tuned to your environment.",
    bullets: [
      "Select optimal technology stack",
      "Plan mitigation for protective systems",
      "Outline delivery formats and integrations",
      "Align roadmap with stakeholders"
    ]
  },
  {
    number: "3",
    title: "Implementation and testing",
    icon: "rocket",
    description: "Build, benchmark, and harden scrapers on production-like datasets for dependable output.",
    bullets: [
      "Develop modular extraction scripts",
      "Provision and tune infrastructure",
      "Validate accuracy with real samples",
      "Optimize throughput and latency"
    ]
  },
  {
    number: "4",
    title: "Launch and support",
    icon: "refresh",
    description: "Roll out production workflows with continuous monitoring and responsive maintenance.",
    bullets: [
      "Deploy with observability in place",
      "Monitor uptime and data quality",
      "Adapt quickly to source changes",
      "Provide 24/7 expert assistance"
    ]
  }
];

const valueBenefits = [
  {
    icon: "target",
    title: "Purpose-built delivery",
    description: "Custom implementations tuned to your objectives instead of generic tooling compromises."
  },
  {
    icon: "users",
    title: "Full expert support",
    description: "A dedicated team steers every stage—from design through maintenance—without added headcount."
  },
  {
    icon: "dollar",
    title: "Maximized ROI",
    description: "Invest only in the outcomes you need with transparent pricing and no hidden platform fees."
  }
];

const faqItems = [
  {
    question: "How long does it take to build a scraper?",
    answer:
      "Simple engagements launch in 3–5 days, while complex protection-aware projects typically take 2–3 weeks. We confirm timing after the initial assessment."
  },
  {
    question: "What kind of data can you collect?",
    answer:
      "Any information that is publicly accessible in a browser: products and prices, company profiles, reviews, vacancies, news, statistics, social content, and more."
  },
  {
    question: "In which format do you deliver data?",
    answer:
      "We provide outputs in your preferred format—JSON, CSV, Excel, XML, direct API integration, or cloud storage delivery—agreed during design."
  },
  {
    question: "How frequently can updates run?",
    answer:
      "Frequencies are tailored to your needs: near real time, hourly, daily, weekly, or any schedule aligned with the data source."
  },
  {
    question: "What happens if a site changes its structure?",
    answer:
      "Our support team monitors scraper health and rapidly adjusts logic when upstream structures shift, ensuring uninterrupted coverage."
  },
  {
    question: "Is this legal?",
    answer:
      "We collect only publicly available data and operate within applicable legislation and site terms. Each project includes a legal feasibility review."
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing reflects complexity, data volume, refresh cadence, and support level. Contact us for a tailored proposal after scoping."
  }
];

const contactItems = [
  {
    icon: "envelope",
    label: "hello@mridata.com",
    href: "mailto:hello@mridata.com"
  },
  {
    icon: "phone",
    label: "+7 999 000 00 00",
    href: "tel:+79990000000"
  },
  {
    icon: "paperPlane",
    label: "@mridata_support",
    href: "https://t.me/mridata_support"
  }
];

const heroCode = `import mri_data

response = mri_data.scrape(
    url="https://example.com",
    schema="product_listing",
    render_js=True
)

print(response.data)
# returns structured JSON data
`;

const navItemsMarkup = navLinks
  .map((link) => `<a href="${link.href}">${link.label}</a>`)
  .join("");

const metricsMarkup = heroMetrics
  .map(
    (metric) => `
      <div class="metric">
        <span class="metric__value">${metric.value}</span>
        <span class="metric__label">${metric.label}</span>
      </div>
    `
  )
  .join("");

const trustLogosMarkup = trustLogos
  .map((logo) => `<div class="logo-tile">${logo}</div>`)
  .join("");

const problemsMarkup = problems
  .map(
    (item) => `
      <article class="card">
        <div class="card__icon">${icon(item.icon)}</div>
        <h3 class="card__title">${item.title}</h3>
        <p class="card__text">${item.description}</p>
      </article>
    `
  )
  .join("");

const useCasesMarkup = useCases
  .map(
    (useCase) => `
      <article class="use-case">
        <div class="use-case__badge">${useCase.number}</div>
        <div>
          <h3 class="card__title">${useCase.title}</h3>
          <p class="card__text">${useCase.description}</p>
        </div>
      </article>
    `
  )
  .join("");

const advantagesMarkup = advantages
  .map(
    (item) => `
      <article class="advantages-card">
        <div class="advantages-card__icon">${icon(item.icon)}</div>
        <h3 class="advantages-card__title">${item.title}</h3>
        <p class="advantages-card__text">${item.description}</p>
      </article>
    `
  )
  .join("");

const testimonialsMarkup = testimonials
  .map(
    (item) => `
      <article class="testimonial-card">
        <div class="testimonial-card__stars">
          ${Array.from({ length: 5 })
        .map(() => `<span class="star">${icon("star", { strokeWidth: 1.5 })}</span>`)
        .join("")}
        </div>
        <p class="testimonial-card__quote">${item.quote}</p>
        <div class="testimonial-card__author">
          <div class="testimonial-card__avatar">${item.initials}</div>
          <div>
            <p class="card__title" style="margin:0 0 0.25rem; font-size:1rem; color:var(--color-text);">${item.author}</p>
            <p class="card__text" style="margin:0; font-size:0.875rem;">${item.role}</p>
          </div>
        </div>
      </article>
    `
  )
  .join("");

const processMarkup = processSteps
  .map(
    (step) => `
      <article class="process-step">
        <div class="process-step__number">${step.number}</div>
        <div class="process-step__card">
          <h3 class="process-step__title">${icon(step.icon)}${step.title}</h3>
          <p class="process-step__text">${step.description}</p>
          <ul class="process-step__list">
            ${step.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </div>
      </article>
    `
  )
  .join("");

const valueBenefitsMarkup = valueBenefits
  .map(
    (item) => `
      <div class="value-prop__benefit">
        ${icon(item.icon)}
        <h4 class="value-prop__benefit-title">${item.title}</h4>
        <p class="card__text" style="text-align:center;">${item.description}</p>
      </div>
    `
  )
  .join("");

const faqMarkup = faqItems
  .map(
    (item, index) => `
      <article class="faq-item" data-index="${index}">
        <button class="faq-item__button" type="button" aria-expanded="false">
          <span>${item.question}</span>
          ${icon("arrowRight")}
        </button>
        <div class="faq-item__content" aria-hidden="true">
          <div class="faq-item__content-inner">${item.answer}</div>
        </div>
      </article>
    `
  )
  .join("");

const contactMarkup = contactItems
  .map(
    (item) => `
      <a class="cta__contact-item" href="${item.href}">
        ${icon(item.icon)}
        <span>${item.label}</span>
      </a>
    `
  )
  .join("");

const app = document.querySelector("#app");

app.innerHTML = `
  <div class="page">
    <header class="header" id="top">
      <div class="header__inner">
        <a class="logo" href="#top">
          <img class="logo__image" src="/company-logo.svg" alt="MRI Data logo" />
          <span>MRI Data</span>
        </a>
        <nav class="nav" aria-label="Primary">
          ${navItemsMarkup}
        </nav>
        <div class="header__actions">
          <a class="button button--primary" href="#contact">Contact us</a>
          <button class="header__burger" type="button" aria-expanded="false" aria-controls="mobile-menu">
            <span></span>
            <span></span>
            <span></span>
            <span class="sr-only">Open navigation</span>
          </button>
        </div>
      </div>
    </header>

    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <nav class="mobile-menu__links" aria-label="Mobile">
        ${navItemsMarkup}
        <a href="#process">Process</a>
        <a href="#faq">FAQ</a>
      </nav>
      <div class="mobile-menu__cta">
        <a class="button button--primary" href="#contact">Contact us</a>
      </div>
    </div>

    <main>
      <section class="hero" id="hero">
        <div class="container">
          <div class="hero__inner">
            <div class="hero__content">
              <span class="hero__badge">${icon("target")}Data parsing professionals</span>
              <h1 class="hero__title">We extract data from any source. <span>Automatically.</span></h1>
              <p class="hero__description">
                MRI Data delivers end-to-end data extraction services across websites, APIs, and complex online systems—from discovery and engineering to deployment and support.
              </p>
              <div class="cta-group">
                <a class="button button--primary" href="#contact">Start a project ${icon("arrowRight")}</a>
                <a class="button button--outline" href="#cases">${icon("play")}View examples</a>
              </div>
              <div class="metrics">
                ${metricsMarkup}
              </div>
            </div>
            <div class="hero__visual" aria-hidden="true">
              <div class="hero__grid"></div>
              <pre class="hero__code">${heroCode}</pre>
            </div>
          </div>
        </div>
      </section>

      <section class="trust" id="trust">
        <div class="container">
          <p class="trust__label">Trusted by teams across industries</p>
          <div class="logos-grid">
            ${trustLogosMarkup}
          </div>
        </div>
      </section>

      <section id="services" style="background-color: var(--color-bg-muted);">
        <div class="container">
          <header class="section__header">
            <span class="section__eyebrow">Why MRI Data</span>
            <h2 class="section__title">We solve critical data challenges</h2>
            <p class="section__description">
              From repetitive data collection to navigating aggressive protection layers, we automate the heavy lifting so your teams stay focused on insight and strategy.
            </p>
          </header>
          <div class="feature-grid">
            ${problemsMarkup}
          </div>
        </div>
      </section>

      <section id="cases">
        <div class="container">
          <header class="section__header">
            <span class="section__eyebrow">Applications</span>
            <h2 class="section__title">How clients use our data extraction</h2>
          </header>
          <div class="feature-grid">
            ${useCasesMarkup}
          </div>
        </div>
      </section>

      <section class="advantages" id="advantages">
        <div class="container">
          <header class="section__header">
            <span class="section__eyebrow" style="color: var(--color-accent-light);">Advantages</span>
            <h2 class="section__title" style="color: var(--color-light-text);">Why organizations choose MRI Data</h2>
          </header>
          <div class="advantages__grid">
            ${advantagesMarkup}
          </div>
        </div>
      </section>

      <section class="testimonials" id="testimonials">
        <div class="container">
          <header class="section__header">
            <span class="section__eyebrow">Testimonials</span>
            <h2 class="section__title">What our clients say</h2>
          </header>
          <div class="testimonials__grid">
            ${testimonialsMarkup}
          </div>
        </div>
      </section>

      <section id="process">
        <div class="container">
          <header class="section__header">
            <span class="section__eyebrow">Process</span>
            <h2 class="section__title">How we collaborate</h2>
            <p class="section__description">
              A transparent workflow guides every project from first conversation through long-term operations, keeping stakeholders aligned at every stage.
            </p>
          </header>
          <div class="process__timeline">
            ${processMarkup}
          </div>
        </div>
      </section>

      <section class="value-prop" id="about">
        <div class="container">
          <div class="value-prop__panel">
            <div class="value-prop__badge">${icon("target", { size: 40 })}</div>
            <h2 class="value-prop__title">Project-first service, not a self-serve tool</h2>
            <p class="value-prop__text">
              Rather than offering another DIY SaaS platform, we craft bespoke extraction systems for your specific objectives, maximizing ROI while minimizing the effort required from your team.
            </p>
            <div class="value-prop__benefits">
              ${valueBenefitsMarkup}
            </div>
          </div>
        </div>
      </section>

      <section class="cta" id="contact">
        <div class="container">
          <div class="section__header" style="color: var(--color-light-text);">
            <span class="cta__badge">Start today</span>
            <h2 class="cta__title">Ready to automate your data collection?</h2>
            <p class="cta__text">
              Share your challenge and receive an action plan with timelines and investment details within 24 hours.
            </p>
          </div>
          <div class="cta__actions">
            <a class="button" style="background: var(--color-light-text); color: var(--color-primary);" href="mailto:hello@mridata.com">Discuss a project ${icon("arrowRight")}</a>
            <a class="button button--ghost" style="color: var(--color-light-text); border: 2px solid rgba(255,255,255,0.35);" href="#faq">Learn more</a>
          </div>
          <div class="cta__contacts">
            ${contactMarkup}
          </div>
        </div>
      </section>

      <section id="faq">
        <div class="container">
          <header class="section__header">
            <span class="section__eyebrow">FAQ</span>
            <h2 class="section__title">Frequently asked questions</h2>
          </header>
          <div class="faq__list">
            ${faqMarkup}
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <div class="footer__top">
            <a class="logo" href="#top">
              <img class="logo__image" src="/company-logo.svg" alt="MRI Data logo" />
              <span>MRI Data</span>
            </a>
            <nav class="footer__nav" aria-label="Footer">
              <a href="#services">Services</a>
              <a href="#cases">Case studies</a>
              <a href="#advantages">Advantages</a>
              <a href="#process">Process</a>
              <a href="#faq">FAQ</a>
            </nav>
          </div>
          <div class="footer__bottom">
            © ${new Date().getFullYear()} MRI Data. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
`;

const header = document.querySelector(".header");
const burgerButton = document.querySelector(".header__burger");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = mobileMenu.querySelectorAll("a");

const toggleMenu = (force) => {
  const isOpen = force ?? burgerButton.getAttribute("aria-expanded") === "true";
  const nextState = force ?? !isOpen;
  burgerButton.setAttribute("aria-expanded", String(nextState));
  mobileMenu.classList.toggle("mobile-menu--open", nextState);
  mobileMenu.setAttribute("aria-hidden", String(!nextState));
  document.body.style.overflow = nextState ? "hidden" : "";
};

burgerButton.addEventListener("click", () => {
  const expanded = burgerButton.getAttribute("aria-expanded") === "true";
  toggleMenu(!expanded);
});

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

const faqItemsEls = document.querySelectorAll(".faq-item");

faqItemsEls.forEach((item) => {
  const button = item.querySelector(".faq-item__button");
  const content = item.querySelector(".faq-item__content");

  if (!button || !content) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");
    faqItemsEls.forEach((other) => {
      if (other !== item) {
        other.classList.remove("is-open");
        const otherButton = other.querySelector(".faq-item__button");
        const otherContent = other.querySelector(".faq-item__content");
        if (otherButton && otherContent) {
          otherButton.setAttribute("aria-expanded", "false");
          otherContent.setAttribute("aria-hidden", "true");
          otherContent.style.maxHeight = "0";
        }
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

/* Small reveal + counters + hero parallax initializer */
function initUIAnimations() {
  // reveal observer
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
    ".logo-tile",
    ".testimonial-card",
    ".process-step",
    ".value-prop__benefit",
    ".hero__content",
    ".hero__visual",
    ".cta",
    ".faq-item"
  ];

  const nodes = document.querySelectorAll(revealSelectors.join(", "));
  nodes.forEach((el, i) => {
    el.classList.add("reveal");
    const delay = (i % 6) + 1;
    el.classList.add(`reveal--delay-${delay}`);
    observer.observe(el);
  });

  // simple numeric counters for metrics
  const digits = document.querySelectorAll(".metric__value");
  digits.forEach((el) => {
    const raw = el.textContent.trim();
    const match = raw.match(/(\d+[\d,.]*)/);
    if (!match) return;
    const start = 0;
    const targetStr = match[0].replace(/[,]/g, "");
    const target = parseInt(targetStr, 10);
    if (isNaN(target) || target <= 0) return;
    const suffix = raw.replace(match[0], "");

    let rafId = null;
    const duration = 1200;
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.floor(eased * target);
      el.textContent = current.toLocaleString() + suffix;
      if (p < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        el.textContent = target.toLocaleString() + suffix;
        if (rafId) cancelAnimationFrame(rafId);
      }
    };

    // start when element becomes visible
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

  // subtle parallax on hero visual for pointer move (desktop only)
  const hero = document.querySelector('.hero');
  const visual = document.querySelector('.hero__visual');
  if (hero && visual && window.matchMedia('(hover: hover) and (min-width: 48rem)').matches) {
    let boundX = 0, boundY = 0;
    hero.addEventListener('pointermove', (ev) => {
      const r = hero.getBoundingClientRect();
      const x = (ev.clientX - (r.left + r.width / 2)) / r.width;
      const y = (ev.clientY - (r.top + r.height / 2)) / r.height;
      boundX = x * 8; // px
      boundY = y * 8;
      visual.style.transform = `translate3d(${boundX}px, ${boundY}px, 0)`;
    });
    hero.addEventListener('pointerleave', () => {
      visual.style.transform = '';
    });
  }
}

window.requestAnimationFrame(initUIAnimations);
