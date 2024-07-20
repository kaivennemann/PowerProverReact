import React from 'react'
import InfoPanel from './InfoPanel'
import Latex from 'react-latex-next'

function ResultsContainer({ className }) {

  return (
    <div className={className}>
        <InfoPanel className='info-panel-input' panelName='Input'>
          <Latex strict>
            {
              `$$
              \\begin{array}{c}
              P \\Rightarrow P, Q  \\quad\\quad\\quad\\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\\\
              \\rule{60pt}{0.4pt} \\quad\\quad \\rule{40pt}{0.4pt} \\\\
              \\Rightarrow P, P \\rightarrow Q  \\quad\\quad\\quad  P \\Rightarrow P \\\\
              \\rule{120pt}{0.4pt} \\\\
              (P \\rightarrow Q) \\rightarrow P \\Rightarrow P \\\\
              \\rule{120pt}{0.4pt} \\\\
              \\Rightarrow ((P \\rightarrow Q) \\rightarrow P) \\rightarrow P
              \\end{array}
              $$`
            }
          </Latex>
        </InfoPanel>
        <InfoPanel className='info-panel-ast' panelName='Abstract Syntax Tree' />
        <InfoPanel className='info-panel-type' panelName='Type' />
        <InfoPanel className='info-panel-interpretation' panelName='Satisfying Interpretation' />
        <InfoPanel className='info-panel-sequent-calculus' panelName='Sequent Calculus Proof' />
    </div>
  )
}

export default ResultsContainer
