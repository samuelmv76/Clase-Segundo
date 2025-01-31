import logo from './logo.svg';
import './App.css';
import Acercade from './components/Acercade';
import Variables from './components/Variables';
import { AdiosMundo } from './components/AdiosMundo';
import Bucles from './components/Bucles';
import Saludar from './components/Saludar';
import Saludar2 from './components/Saludar2';
import EjemploEstado3 from './components/EjemploEstado3';

const App = ()=> {
  const nombre= 'Juan Diego'

  const usuario = {
    nombre: "Juan Diego",
    edad: 54,
    color: "Verde"
  }
  
  const saludarFn = (nombre) => {
    alert("Hola, " + nombre);
  };


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
        <h1>Hola Mundo {nombre}</h1>
        <Variables />
        <AdiosMundo />
        <Bucles />        
        <Saludar userInfo={usuario} />
        <Saludar2 userInfo={usuario} saludarFn={saludarFn} />
        <EjemploEstado3 />
      </header> 
      <Acercade />
      
    </div>
  );
}

export default App;
