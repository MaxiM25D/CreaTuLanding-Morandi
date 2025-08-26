import { Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";

function Productos() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="PRODUCTOS DISPONIBLES🌟" />} />
        <Route path=":id" element={<ItemDetailContainer />} />
      </Routes>
    </div>
  );
}

export default Productos;