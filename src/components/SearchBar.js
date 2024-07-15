import React from 'react'


function GoButton({className}) {
  function handleClick() {
    alert("Clicked!")
  }
  return (
    <button className={className} onClick={handleClick}>
      GO!
    </button>
  )
}
  

function SearchBar() {
  return (
    <div className='search-bar'>
      <form className='search-form'>
        <input className='search-bar-input' type='text' placeholder='Enter a formula, e.g. a and b or !c' />
      </form>
      <GoButton className='search-bar-button' />
    </div>
  )
}

export default SearchBar
