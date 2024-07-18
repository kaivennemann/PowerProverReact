
import React, { useEffect } from 'react'
import * as d3 from 'd3'
import randomFormula from '../utils/FormulaGenerator.js'
import '../styles/Background.css'

function precomputeAnimation() {
  const textElements = d3.selectAll('.animated-text')
  
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
        .style('opacity', 0.7)
        .style('filter', 'blur(3px)')
        .style('transform', `scale(0.1) translateZ(${startZ}px)`)
        .transition()
        .delay(delay * 1000)
        .duration(duration * 1000)
        .ease(d3.easeLinear)
        .style('opacity', 0)
        .style('filter', 'blur(0px)')
        .style('transform', `scale(${endScale}) translate(${x}px, ${y}px) translateZ(${endZ}px)`)
        .on('end', animate)
    }

    animate()
  })
}

function AnimatedText({ text }) {
  return (
    <div className='animated-text'>
      {text}
    </div>
  )
}

function AnimatedBackground() {
  useEffect(precomputeAnimation, [])

  return (
    <div className='animated-background'>
      {Array.from({length: 10}, (_, i) => (
        <AnimatedText text={randomFormula()} key={i+1} />
      ))}
    </div>
  )
}

export default AnimatedBackground
