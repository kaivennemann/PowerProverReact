import React from 'react'
import InfoPanel from './InfoPanel'
import SequentCalculus from './SequentCalculus'

  
const proof = [
    'A → B => !A, B', [
        ['A → B, A => B', [
            ['A => B, A', []],
            ['B, A => B', []]]
        ]
    ]
]

function ResultsContainer({ className }) {

  // TODO: make infopanel scrollable so I can add big sequent proofs

  return (
    <div className={className}>
        <InfoPanel className='info-panel-sequent-calculus' panelName='Sequent Calculus Proof' >
            <SequentCalculus proof={proof} />
        </InfoPanel>
        <InfoPanel className='info-panel-input' panelName='Input' />
        <InfoPanel className='info-panel-ast' panelName='Abstract Syntax Tree' />
        <InfoPanel className='info-panel-type' panelName='Type' />
        <InfoPanel className='info-panel-interpretation' panelName='Satisfying Interpretation' />
    </div>
  )
}

export default ResultsContainer
