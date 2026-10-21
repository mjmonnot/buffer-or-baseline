const PATHS = {
  lone: {
    value: "−.36",
    held: true,
    label: "Zero-order r, 2018 trait with 2024 loneliness",
    sub: "Person-level b = −0.19, 95% CI [−0.24, −0.14], n = 819. Full-sample self-critical β = −.30. Out-of-fold ΔR² = .036.",
    note: "Largest association in the study. Reported as estimated; it was not a stated prediction.",
    line: "The 2018 score marked later loneliness.",
    detail: "Out-of-fold ΔR² = .036 beyond baseline covariates.",
  },
  over: {
    value: "−.20",
    held: false,
    label: "Standardized β, 2024 digital overwhelm",
    sub: "b = −0.20, 95% CI [−0.24, −0.16], p < .001. Self-critical composite β = −.21.",
    note: "2024 technology-appraisal model, controlling for prepandemic well-being, age, education, and technology affinity.",
    line: "The same score marked less digital overwhelm.",
    detail: "Favorable technology appraisals β = .10 in the same model.",
  },
  level: {
    value: "2.16",
    held: false,
    label: "Life satisfaction at the start of 2020, points on 0–100",
    sub: "b = 2.16, 95% CI [1.40, 2.91], β = .14. Pre-2020 slope b = 0.25, 95% CI [0.05, 0.45].",
    note: "Piecewise growth model. The 2018 trait marks the level at the 2020 knot.",
    line: "People higher on the 2018 score were already better off.",
    detail: "Implied means at ±1 SD stay apart through 2024.",
  },
};

const select = document.getElementById("path-select");

function show(key) {
  const path = PATHS[key];
  const value = document.getElementById("path-value");
  value.textContent = path.value;
  value.classList.toggle("held", !!path.held);
  document.getElementById("path-label").textContent = path.label;
  document.getElementById("path-sub").textContent = path.sub;
  document.getElementById("path-note").textContent = path.note;
  document.getElementById("path-verdict").textContent = path.line;
  document.getElementById("path-bf").textContent = path.detail;
}

if (select) {
  select.addEventListener("change", () => show(select.value));
}

// Icon arrays: 10 x 10 dots, `data-filled` of them in navy, drawn as SVG.
(function iconArrays() {
  const NS = "http://www.w3.org/2000/svg";
  document.querySelectorAll(".icon-array").forEach((el) => {
    const filled = Math.max(0, Math.min(100, parseInt(el.dataset.filled, 10) || 0));
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", "0 0 200 200");
    svg.setAttribute("aria-hidden", "true");
    for (let i = 0; i < 100; i += 1) {
      const row = Math.floor(i / 10);
      const col = i % 10;
      const c = document.createElementNS(NS, "circle");
      c.setAttribute("cx", String(10 + col * 20));
      c.setAttribute("cy", String(10 + row * 20));
      c.setAttribute("r", "7");
      if (i < filled) {
        c.setAttribute("fill", "#1f3a5f");
      } else {
        c.setAttribute("fill", "none");
        c.setAttribute("stroke", "#b9afa0");
        c.setAttribute("stroke-width", "1.4");
      }
      svg.appendChild(c);
    }
    el.appendChild(svg);
  });
})();

// Reveal on scroll. Falls back to visible when IntersectionObserver is absent
// or when the user prefers reduced motion.
(function reveal() {
  const items = document.querySelectorAll(".reveal");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window) || reduce) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.15 }
  );
  items.forEach((el) => io.observe(el));
})();
