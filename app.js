const PATHS = {
  h1: {
    value: "−0.10",
    label: "Coefficient on the disruption slope",
    sub: "p = .746, 95% CI [−0.71, 0.51], β = −.02. Implied window change −6.02 vs. −6.42 points at ±1 SD.",
    note: "Trait regression of the 2020–2022 life-satisfaction slope. Primary unweighted piecewise model.",
    verdict: "Hypothesis 1 was not supported.",
    bf: "BF₀₁ = 51.52 for the model without this path.",
  },
  lone: {
    value: "−.36",
    label: "Zero-order r, 2018 trait with 2024 loneliness",
    sub: "Person-level b = −0.19, 95% CI [−0.24, −0.14], n = 819 in the Hypothesis 2 model. Full-sample self-critical β = −.30.",
    note: "Estimated inside the Hypothesis 2 model; the hypothesis for this outcome concerned telework moderation, not this direct path.",
    verdict: "Largest association in the study. Not a stated prediction.",
    bf: "Out-of-fold ΔR² = .036 beyond baseline covariates.",
  },
  over: {
    value: "−.20",
    label: "Standardized β, 2024 digital overwhelm",
    sub: "b = −0.20, 95% CI [−0.24, −0.16], p < .001. Self-critical composite β = −.21; self-caring unique association near zero.",
    note: "Hypothesis 3 model, controlling for prepandemic well-being, age, education, and technology affinity.",
    verdict: "Hypothesis 3 was partially supported.",
    bf: "BF₁₀ = 1.44 × 10¹⁹ for overwhelm. Familiarization OR = 0.98, BF₀₁ = 40.73.",
  },
  h2: {
    value: "−0.96",
    label: "Trait × within-person telework interaction",
    sub: "p = .076, 95% CI [−2.01, 0.10]. Simple slope near zero at −1 SD; b = −1.81 at +1 SD (descriptive; interaction not significant).",
    note: "Random-slope multilevel model, 3,484 person-years from 1,080 persons with complete covariates.",
    verdict: "Hypothesis 2 was not supported.",
    bf: "BF₀₁ = 12.28. Evidence against this path is weaker than for the disruption slope.",
  },
};

const select = document.getElementById("path-select");

function show(key) {
  const path = PATHS[key];
  document.getElementById("path-value").textContent = path.value;
  document.getElementById("path-label").textContent = path.label;
  document.getElementById("path-sub").textContent = path.sub;
  document.getElementById("path-note").textContent = path.note;
  document.getElementById("path-verdict").textContent = path.verdict;
  document.getElementById("path-bf").textContent = path.bf;
}

if (select) {
  select.addEventListener("change", () => show(select.value));
}
