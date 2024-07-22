import React from 'react'
import SearchBar from './SearchBar'
import ResultsContainer from './ResultsContainer'
import '../styles/QueryContainer.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// TODO: add shared state to children (i.e. current search term)

function QueryContainer({ className }) {
  return (
    <BrowserRouter>
      <div className={className}>
          <SearchBar className='search-bar' />
          <Routes>
            <Route path='/' />
            <Route path='/input' Component={ResultsContainer} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default QueryContainer
