import './styles/App.css';
import Panel from './components/panel.js';

function MyButton() {
  function handleClick() {
    alert("Clicked!")
  }
  return (
    <button onClick={handleClick}>
      I'm a button!
    </button>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Home Page</h1>
      <MyButton />
      <div className="panel-container">
        
        <Panel>
          <p> Panel 1 </p>
        </Panel>

        <Panel>
          <p> Panel 2 </p>
        </Panel>

      </div>
    </div>
  )
}

export default App;
