// List of randomly generated formulas
const formulas = [
  "¬(P ∧ Q) → (¬P ∨ ¬Q)",
  "(P ∨ Q) → (Q ∨ P)",
  "(¬P ∨ Q) ∧ (P ∨ ¬Q)",
  "(P ↔ Q) ↔ (¬P ↔ ¬Q)",
  "¬(P ∧ ¬P)",
  "(P ∧ Q) → P",
  "(P ∧ Q) → Q",
  "P → (Q → P)",
  "(P ∨ Q) ∧ ¬Q → P",
  "¬(P ∧ Q) ↔ (¬P ∨ ¬Q)",
  "(P → Q) → (¬Q → ¬P)",
  "∃x P(x) → ∀x P(x)",
  "¬(P ↔ ¬P)",
  "(P → Q) ↔ (¬P ∨ Q)",
  "P ↔ ¬¬P",
  "(P ∧ ¬P) → Q",
  "P ∧ (Q ∨ ¬Q)",
  "¬∀x P(x) → ∃x ¬P(x)",
  "P → (Q → (P ∧ Q))",
  "¬∃x P(x) ↔ ∀x ¬P(x)",
  "¬(P ∧ Q) → (¬P ∨ ¬Q)",
  "∀x (P(x) ∨ Q(x)) ↔ (∀x P(x) ∨ ∀x Q(x))",
  "∃x (P(x) ∧ Q(x)) → (∃x P(x) ∧ ∃x Q(x))",
  "(P ∨ Q ∨ R) → (Q ∨ P ∨ R)",
  "∀x (P(x) → Q(x)) → (∀x P(x) → ∀x Q(x))",
  "(¬P ∨ Q ∨ R) ∧ (P ∨ ¬Q ∨ ¬R)",
  "(P ↔ Q) ↔ (¬P ↔ ¬Q)",
  "¬(P ∧ ¬P)",
  "(P ∧ Q ∧ R) → P",
  "(P ∧ Q) → Q ∧ R",
  "P → (Q → (R → P))",
  "(P ∨ Q) ∧ (¬Q ∨ R) → (P ∧ R)",
  "¬(P ∧ Q) ↔ (¬P ∨ ¬Q)",
  "(P → Q → R) → (¬R → ¬Q → ¬P)",
  "∃x P(x) → ∀x P(x)",
  "P ∧ (Q ∨ R) ↔ (P ∧ Q) ∨ (P ∧ R)",
  "¬(P ↔ ¬P)",
  "(P → Q) ↔ (¬P ∨ Q)",
  "P ↔ ¬¬P",
  "∀x (P(x) ∧ Q(x)) → ∀x P(x)",
  "∃x (P(x) ∧ Q(x)) → ∃x P(x)",
  "(P ∧ ¬P) → Q",
  "P ∧ (Q ∨ ¬Q)",
  "(P ∨ Q) → (Q ∨ R) ↔ ((P ∨ Q) ∨ R)",
  "¬∀x P(x) → ∃x ¬P(x)",
  "∀x (P(x) → Q(x)) ↔ (¬∃x (P(x) ∧ ¬Q(x)))",
  "P → (Q → (P ∧ Q))",
  "∀x (P(x) ∨ Q(x)) → ∀x P(x) ∨ ∀x Q(x)",
  "¬∃x P(x) ↔ ∀x ¬P(x)",
  "¬(P ∧ Q ∧ R) → (¬P ∨ ¬Q ∨ ¬R)",
  "(P ∨ Q ∨ R) ↔ (Q ∨ P ∨ R)",
  "∃x (P(x) ∧ Q(x)) → ∃x P(x)",
  "¬(P ∨ Q) ↔ (¬P ∧ ¬Q)",
  "∀x (P(x) ∧ Q(x)) → (∃x P(x) ∧ ∃x Q(x))",
  "(P ∨ Q) ∧ ¬R → (P ∨ ¬Q)",
  "¬(P ∧ Q) ↔ (¬P ∨ ¬Q)",
  "(P → Q) → (¬Q → ¬P)",
  "∃x P(x) → ∀x P(x)",
  "∀x (P(x) → Q(x)) → (∃x P(x) → ∃x Q(x))",
  "P ∧ (Q ∨ R) ↔ (P ∧ Q) ∨ (P ∧ R)",
  "¬(P ↔ ¬P)",
  "(P → Q) ↔ (¬P ∨ Q)",
  "P ↔ ¬¬P",
  "∀x (P(x) ∧ Q(x)) → ∀x P(x)",
  "∃x (P(x) ∧ Q(x)) → ∃x P(x)",
  "(P ∧ ¬P) → Q",
  "P ∧ (Q ∨ ¬Q)",
  "(P ∨ Q) → (Q ∨ R) ↔ ((P ∨ Q) ∨ R)",
  "¬∀x P(x) → ∃x ¬P(x)",
  "∃x ∀y P(x, y) → ∀x ∃y P(x, y)",
  "¬∀x ∀y P(x, y) → ∃x ∃y ¬P(x, y)",
  "∀x ∀y (P(x, y) ∧ Q(x, y)) → ∀x P(x, y)",
  "∃x ∃y (P(x, y) ∧ Q(x, y)) → ∃x P(x, y)"
]

const propositionalSymbolReplacements = [
  ["P", "Q", "R"],
  ["A", "B", "C"],
  ["R", "S", "T"],
  ["i", "j", "k"],
  ["L", "M", "N"],
  ["α", "β", "γ"],
  ["δ", "ε", "ζ"],
  ["η", "θ", "ι"],
  ["κ", "λ", "μ"],
  ["ν", "ξ", "ο"],
  ["π", "ρ", "σ"],
  ["τ", "υ", "φ"],
  ["χ", "ψ", "ω"]
]

const functionSymbolReplacements = [
  ["P", "Q", "R"],
  ["R", "S", "T"],
  ["L", "M", "N"],
  ["F", "G", "H"]
]

const functionVariableReplacements = [
  ["x", "y"],
  ["y", "z"],
  ["u", "v"],
  ["v", "w"],
  ["i", "j"],
  ["j", "k"]
]

function randomChoice(arr) {
  // Pick random element from array
  return arr[Math.floor(arr.length * Math.random())]
}

function randomLowerCase(arr) {
  // Change to lower case half the time
  if (Math.random() < 0.5) {
    return arr.map((x) => x.toLowerCase())
  }
  return arr
}

export default function randomFormula() {
  // Return a random logical formula with random symbols

  // Pick a formula
  let formula = randomChoice(formulas)

  // First-order formula
  if (formula.includes('x')) {
    // Symbol replacements
    const repl = randomLowerCase(randomChoice(functionSymbolReplacements))
    const repl_vars = randomChoice(functionVariableReplacements)

    return (
      formula
        .replaceAll("R", repl[2])
        .replaceAll("Q", repl[1])
        .replaceAll("P", repl[0])
        .replaceAll("y", repl_vars[1])
        .replaceAll("x", repl_vars[0])
    )
  }

  // Only propositional symbols
  else {
    // Symbol replacements
    const repl = randomLowerCase(randomChoice(propositionalSymbolReplacements))
    return (
      formula
        .replaceAll("R", repl[2])
        .replaceAll("Q", repl[1])
        .replaceAll("P", repl[0])
    )
  }
}
