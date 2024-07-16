import './styles/App.css'
import QueryContainer from './components/QueryContainer.js'
import PageHeader from './components/PageHeader.js'
import PageFooter from './components/PageFooter.js'
import background from "./static/background.jpeg"


const App = () => {
  return (
    <div className="app" style={{
      backgroundImage: `url(${background})`,
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'
    }}>
      <PageHeader className='page-header' />
      <QueryContainer className='query-container' />
      <PageFooter className='page-footer' />
    </div>
  )
}

export default App
