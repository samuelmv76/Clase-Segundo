import logo from './logo.svg';
import './App.css';
import Acercade from './components/Acercade';
import Variables from './components/Variables';
import AdiosMundo from './components/AdiosMundo';

const App = ()=> {
  const nombre= 'Juan Diego'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Variables />
        <AdiosMundo />
      </header>
      <Acercade />
      
    </div>
  );
}

export default App;
