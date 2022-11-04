import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaCategorías from "./componentes/categorias/TablaCategorias";
import Header from "./componentes/general/Header";
import Tarjetas from "./componentes/general/Tarjetas";
import FormProducto from "./componentes/productos/FormProductos";
import Variables from "./componentes/general/Variables";
import ListaProductos from "./componentes/productos/ListaProductos";
import FormEdicionCategoria from "./componentes/categorias/FormEdicionCategoria";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tarjetas />} exact></Route>
          <Route path="/variables" element={<Variables/>} exact></Route>
          <Route path="/categorias" element={<TablaCategorías />} exact></Route>
          <Route path="/categorias/form/:id" element={<FormEdicionCategoria/>} exact></Route>
          <Route path="/productos" element={<ListaProductos/> } exact></Route>
          <Route path="/productos" element={<FormProducto/>} exact></Route>
          <Route path="/productos/form/:id" element={<FormProducto/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
