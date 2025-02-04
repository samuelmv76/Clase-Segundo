import logo from "./logo.svg";
import "./App.css";
import Visor from "./components/Visor";
function App() {
  const imagenesSrc = new Array(
    "imagen1.jpg",
    "imagen2.png",
    "imagen3.png",
    "imagen4.png",
    "imagen5.jpg",
    "imagen6.jpg",
    "imagen7.webp"
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>learn react</p>
        <Visor imagenes={imagenesSrc} />
      </header>
    </div>
  );
}
export default App;
