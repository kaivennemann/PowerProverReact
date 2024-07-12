import React from 'react'
import InfoPanel from './InfoPanel'

function ResultsContainer() {
  return (
    <div className='results-container'>
        <InfoPanel panelName='Input' />
        <InfoPanel panelName='Abstract Syntax Tree' />
        <InfoPanel panelName='Type' />
        <InfoPanel panelName='Satisfying Interpretation' />
        <InfoPanel panelName='Sequent Calculus Proof' />
    </div>
  )
}

export default ResultsContainer
