
import React, { useEffect } from 'react'
import * as d3 from 'd3'
import '../styles/Background.css'

function precomputeAnimation() {
  const textElements = d3.selectAll('.animated-text')

  // TODO: deal with slow UI
  
  textElements.each(function() {
    const element = d3.select(this)
    const animate = () => {
      const angle = Math.random() * 360
      const x = 500 * Math.cos(angle * (Math.PI / 180))
      const y = 500 * Math.sin(angle * (Math.PI / 180))
      const startZ = -100
      const endZ = 1000
      const endScale = 7
      const duration = 30 + 20 * Math.random()
      const delay = Math.random() * duration

      element
        .style('font-size', '5rem')
        .style('opacity', 0.3)
        .style('filter', 'blur(3px)')
        .style('transform', `scale(0.1) translateZ(${startZ}px)`)
        .transition()
        .delay(delay * 1000)
        .duration(duration * 1000)
        .ease(d3.easeLinear)
        .style('opacity', 0.7)
        .style('filter', 'blur(0px)')
        .style('transform', `scale(${endScale}) translate(${x}px, ${y}px) translateZ(${endZ}px)`)
        .on('end', animate)
    }

    animate()
  })
}

// A bunch of random formulas
const words = [
  "¬(P ∧ Q) → (¬P ∨ ¬Q)",
  "∀x (P(x) ∨ Q(x)) ↔ (∀x P(x) ∨ ∀x Q(x))",
  "∃x (P(x) ∧ Q(x)) → (∃x P(x) ∧ ∃x Q(x))",
  "(P ∨ Q) → (Q ∨ P)",
  "∀x (P(x) → Q(x)) → (∀x P(x) → ∀x Q(x))",
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
  "∀x (a(x) → b(x)) → (∃x a(x) → ∃x b(x))",
  "a ∧ (b ∨ c) ↔ (a ∧ b) ∨ (a ∧ c)",
  "¬(a ↔ ¬a)",
  "(a → b) ↔ (¬a ∨ b)",
  "a ↔ ¬¬a",
  "∀x (a(x) ∧ b(x)) → ∀x a(x)",
  "∃x (a(x) ∧ b(x)) → ∃x a(x)",
  "(a ∧ ¬a) → b",
  "a ∧ (b ∨ ¬b)",
  "(a ∨ b) → (b ∨ c) ↔ ((a ∨ b) ∨ c)",
  "¬∀x a(x) → ∃x ¬a(x)",
  "∀x (a(x) → b(x)) ↔ (¬∃x (a(x) ∧ ¬b(x)))",
  "a → (b → (a ∧ b))",
  "∀x (a(x) ∨ b(x)) → ∀x a(x) ∨ ∀x b(x)",
  "¬∃x a(x) ↔ ∀x ¬a(x)"
]

function AnimatedText({ text }) {
  return (
    <div className='animated-text'>
      {text}
    </div>
  )
}

function AnimatedBackground() {
  useEffect(() => precomputeAnimation, [])

  return (
    <div className='animated-background'>
      {words.map((word, i) => (
        <AnimatedText text={word} key={i} />
      ))}
    </div>
  )
}

export default AnimatedBackground
