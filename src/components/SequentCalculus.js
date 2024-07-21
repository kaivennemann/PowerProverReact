import React from 'react'
import '../styles/SequentCalculus.css'

  
function HorizontalLine({ width }) {
    return ( // TODO: figure out width
        <hr
            // style={{
            //     width: width ? width : '100px'
            // }}
        />
    )
}

function Sequent({ text }) {
    return (
        <div className='sequent'>
            {text}
        </div>
    )
}

function EmptySequent() {
    return (
        <div className='empty-sequent' />
    )
}

function SequentProof({ stree }) {
    const conclusion = stree[0]
    const hypotheses = stree[1]
    return (
        <div className='sequent-proof'>
            <div className='sequent-proof-row'>
                {
                    (hypotheses.length > 0) ? hypotheses.map(
                        (seq, i) => <SequentProof stree={seq} key={i}/>
                    ) : <EmptySequent />
                }
            </div>
            <HorizontalLine />
            <Sequent text={conclusion} />
        </div>
    )
}

function SequentCalculus({ proof }) {
  return (
    <div className='sequent-calculus'>
        <SequentProof stree={proof} />
    </div>
  )
}

export default SequentCalculus
