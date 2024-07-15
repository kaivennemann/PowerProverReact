import React from 'react'
import SearchBar from './SearchBar'
import ResultsContainer from './ResultsContainer'
import '../styles/QueryContainer.css'

function QueryContainer() {
  return (
    <div className="query-container">
        <SearchBar />
        <ResultsContainer />
    </div>
  )
}

export default QueryContainer
