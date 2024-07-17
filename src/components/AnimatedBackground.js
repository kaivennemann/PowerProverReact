import React from 'react'
import '../styles/Background.css'


function AnimatedText({ className }) {
  return (
    <div className={className}>
      AnimatedText
    </div>
  )
}


function AnimatedBackground() {
  return (
    <div className='animated-background'>
      <AnimatedText className='animated-text' />
    </div>
  )
}

export default AnimatedBackground
