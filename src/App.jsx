import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Inicio from "./pages/Inicio/Inicio";
import Contacto from "./pages/Contacto/Contacto";
import Carrito from "./pages/Carrito/Carrito";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Inicio greeting="PRODUCTOS DESTACADOS🔥" />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/producto/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto greeting="CONTACTANOS" />} />
          <Route path="/carrito" element={<Carrito greeting="🛒CARRITO DE COMPRAS🛒" />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
      <Footer className="footer"/>
    </>
  );
}

export default App;