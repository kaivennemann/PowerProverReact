import React from 'react'


function GoButton() {
  function handleClick() {
    alert("Clicked!")
  }
  return (
    <button onClick={handleClick}>
      GO!
    </button>
  )
}
  

function SearchBar() {
  return (
    <div>SearchBar</div>
  )
}

export default SearchBar
