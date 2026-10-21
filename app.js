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
