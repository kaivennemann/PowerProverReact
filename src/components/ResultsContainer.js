import React from 'react'
import InfoPanel from './InfoPanel'

function ResultsContainer({ className }) {
  return (
    <div className={className}>
        <InfoPanel className='info-panel-input' panelName='Input' />
        <InfoPanel className='info-panel-ast' panelName='Abstract Syntax Tree' />
        <InfoPanel className='info-panel-type' panelName='Type' />
        <InfoPanel className='info-panel-interpretation' panelName='Satisfying Interpretation' />
        <InfoPanel className='info-panel-sequent-calculus' panelName='Sequent Calculus Proof' />
    </div>
  )
}

export default ResultsContainer
