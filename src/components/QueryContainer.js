import React from 'react'
import SearchBar from './SearchBar'
import ResultsContainer from './ResultsContainer'
import '../styles/QueryContainer.css'

function QueryContainer({ className }) {
  return (
    <div className={className}>
        <SearchBar className='search-bar' />
        <ResultsContainer className='results-container' />
    </div>
  )
}

export default QueryContainer
