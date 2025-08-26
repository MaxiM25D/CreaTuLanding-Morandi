import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Carrito from "./pages/Carrito";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio greeting="PRODUCTOS DESTACADOS🔥" />} />
          <Route path="/productos/*" element={<Productos />} />
          <Route path="/contacto" element={<Contacto greeting="CONTACTANOS" />} />
          <Route path="/carrito" element={<Carrito greeting="🛒CARRITO DE COMPRAS🛒" />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
        </Routes>
      </main>
      <Footer className="footer"/>
    </>
  );
}

export default App;