import './styles/App.css'
import QueryContainer from './components/QueryContainer.js'
import PageHeader from './components/PageHeader.js'
import PageFooter from './components/PageFooter.js'

const App = () => {
  return (
    <div className="app">
      <PageHeader />
      <QueryContainer />
      <PageFooter />
    </div>
  )
}

export default App
