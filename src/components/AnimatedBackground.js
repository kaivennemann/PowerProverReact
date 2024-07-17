import React, { useEffect } from 'react'
import '../styles/Background.css'


function randomAngle() {
  return Math.random() * 360
}

function randomDelay() {
  return Math.random() * 20
}

function AnimatedText({ text }) {
  return (
    <div className='animated-text'>
      {text}
    </div>
  )
}

const words = [
  "Hope",
  "Courage",
  "Strength",
  "Faith",
  "Dream",
  "Believe",
  "Inspire",
  "Empower",
  "Resilience",
  "Perseverance",
  "Love",
  "Compassion",
  "Gratitude"
]

function AnimatedBackground() {
  // Adjust angle and delay for each animation
  useEffect(() => {
    const textElements = document.querySelectorAll('.animated-text');

    textElements.forEach((element) => {
      const angle = randomAngle();
      const delay = randomDelay();
      element.style.setProperty('--angle', `${angle}deg`);
      element.style.setProperty('--delay', `${delay}s`);
    });
  }, []);

  return (
    <div className='animated-background'>
      {words.map((word, i) => (
        <AnimatedText text={word} key={i} />
      ))}
    </div>
  )
}

export default AnimatedBackground
