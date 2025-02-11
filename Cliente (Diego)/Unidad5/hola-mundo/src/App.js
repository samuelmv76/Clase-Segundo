import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Pagina1 from './pages/Pagina1';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pagina1" element={<Pagina1 />} />
    </Routes>
  );
}
export default App;
