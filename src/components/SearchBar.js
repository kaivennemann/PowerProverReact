import React, { useState, useRef } from 'react'


function GoButton({className}) {
  function handleClick() {
    alert("Clicked!")
  }
  return (
    <button className={className} onClick={handleClick}>
      ⇒
    </button>
  )
}
  

function SearchBar({ className }) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef(null)

  function handleKeyDown(event) {
    const cursorPos = event.target.selectionStart
    console.log(inputValue.substring(cursorPos, cursorPos + 2))
    if (
      event.key === 'Backspace'
      && cursorPos < inputValue.length
      && inputValue.substring(cursorPos - 1, cursorPos + 1) === '()'
    ) {
      const newVal = inputValue.substring(0, cursorPos) + inputValue.substring(cursorPos + 2)
      setInputValue(newVal)
    }
  }

  // TODO: add external parentheses when part of input selected

  // TODO: fix cursor moving bug (when in middle of input, cursor jumps)

  // Helpful text replacement for inputing special symbols
  function replaceText(event) {
    let curVal = event.target.value
    const cursorPos = event.target.selectionStart

    if (curVal[cursorPos - 1] === '(') {
      // Auto-complete parentheses
      curVal += ')'
      
      // Move the cursor back 1 space
      setTimeout(() => {
        inputRef.current.setSelectionRange(cursorPos, cursorPos);
      }, 0)
    }

    // Ordered text replacements
    let newVal = [
      [/not|!/, '¬'],
      [/ ?(and|&)/, ' ∧ '],
      [/ ?(or|\|)/, ' ∨ '],
      [/ ?<->/, ' ↔ '],
      [/ ?->/, ' → '],
      [/[^a-zA-Z¬∧∨→↔()<\- ]/g, ''] // remove non-letters
    ].reduce((acc, [old, repl]) => acc.replace(old, repl), curVal)

    // TODO: add spacing around logical symbols
    // newVal = newVal.replace(/ ?([∧∨→↔]) ?/g, ' $1 ')

    setInputValue(newVal) 
  }

  return (
    <div className={className}>
      <form className='search-form'>
        <input
          className='search-bar-input'
          type='text'
          placeholder='Enter a formula, e.g. a and b or !c'
          value={inputValue}
          onChange={replaceText}
          onKeyDown={handleKeyDown}
          ref={inputRef}
        />
      </form>
      <GoButton className='search-bar-button' />
    </div>
  )
}

export default SearchBar
