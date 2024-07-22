import React from 'react'
import InfoPanel from './InfoPanel'
import SequentCalculus from './SequentCalculus'
import AbstractSyntaxTree from './AbstractSyntaxTree'
import { useLocation } from 'react-router-dom'

// TODO: connect with API

const formula = '(A → B) → (¬A ∨ B)'

const proof = [
    'A → B ⇒ ¬A ∨ B', [
        ['A → B ⇒ ¬A, B', [
            ['A → B, A ⇒ B', [
                ['A ⇒ B, A', []],
                ['b, a ⇒ b', []]
            ]]
        ]]
    ]
]

const tree = [
    '→', [
        ['∨', [
            ['A', []],
            ['B', []]
        ]],
        ['B', []]
    ]
]

function useInput() {
    return new URLSearchParams(useLocation().search)
}

function ResultsContainer() {
    const input = useInput().get('formula')

  // TODO: make infopanel scrollable so I can add big sequent proofs

  return (
    <div className='results-container'>
        <InfoPanel className='info-panel-input' panelName='Input'>
            <p>{input}</p>
        </InfoPanel>

        <InfoPanel className='info-panel-ast' panelName='Abstract Syntax Tree'>
            <AbstractSyntaxTree tree={tree} />
        </InfoPanel>

        <InfoPanel className='info-panel-type' panelName='Type'>
            <p>satisfiable</p>
        </InfoPanel>

        <InfoPanel className='info-panel-interpretation' panelName='Satisfying Interpretation'>
            <p>
                A: true
                B: true
            </p>
        </InfoPanel>

        <InfoPanel className='info-panel-bdd' panelName='Binary Decision Diagram'>
            <p>
                INSERT BDD HERE
            </p>
        </InfoPanel>

        <InfoPanel className='info-panel-sequent-calculus' panelName='Sequent Calculus Proof' >
            <SequentCalculus proof={proof} />
        </InfoPanel>
    </div>
  )
}

export default ResultsContainer
