import React, { useRef, useState, useLayoutEffect } from 'react'
import '../styles/AbstractSyntaxTree.css'


function Node({ text }) {
  return (
    <div className='ast-node'>
      {text}
    </div>
  )
}

// TODO: make more efficient; fix lag
function ConnectingLine({ parentNode, childNode }) {
  const [lineStyle, setLineStyle] = useState({})

  useLayoutEffect(() => {
    // position the line so that it connects parent and child nodes
    const updateLine = () => {
      if (parentNode.current && childNode.current) {
        const parentRect = parentNode.current.getBoundingClientRect()
        const childRect = childNode.current.getBoundingClientRect()
  
        const p = 0.6 // portion of full line that we want to show
        const x1 = parentRect.left + parentRect.width / 2
        const y1 = parentRect.top + parentRect.height / 2
        const x2 = childRect.left + childRect.width / 2
        const y2 = childRect.top + childRect.height / 2
        const dx = x2 - x1
        const dy = y2 - y1
        const line_x1 = x1 + 0.5 * (1 - p) * dx
        const line_y1 = y1 + 0.5 * (1 - p) * dy
        const line_x2 = x2 - 0.5 * (1 - p) * dx
        const line_y2 = y2 - 0.5 * (1 - p) * dy
  
        setLineStyle({
            left: `${line_x1}px`,
            top: `${line_y1}px`,
            width: `${Math.sqrt((line_x2 - line_x1) ** 2 + (line_y2 - line_y1) ** 2)}px`,
            transform: `rotate(${Math.atan2(dy, dx)}rad)`,
        })
      }
    }

    updateLine()
    window.addEventListener('resize', updateLine) // ensure absolute position gets adjusted

    // cleanup function
    return () => window.removeEventListener('resize', updateLine)
  }, [parentNode, childNode])

  return (
      <div className="connecting-line" style={lineStyle}></div>
  )
}

function AbstractSyntaxTree({ tree, parent }) {
  const nodeRef = useRef(null)
  const text = tree[0]
  const children = tree[1]
  
  return (
    <div className='ast'>
        {
          parent ? <ConnectingLine parentNode={parent} childNode={nodeRef} /> : null
        }
        <div ref={nodeRef}>
          <Node text={text} />
        </div>
        <div className='ast-row'>
            {
                (children.length > 0) ? children.map(
                    (child, i) => <AbstractSyntaxTree tree={child} key={i} parent={nodeRef} />
                ) : null
            }
        </div>
    </div>
  )
}

export default AbstractSyntaxTree
