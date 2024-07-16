import './styles/App.css'
import QueryContainer from './components/QueryContainer.js'
import PageHeader from './components/PageHeader.js'
import PageFooter from './components/PageFooter.js'

const App = () => {
  return (
    <div className="app">
      <PageHeader className='page-header' />
      <QueryContainer className='query-container' />
      <PageFooter className='page-footer' />
    </div>
  )
}

export default App
