import { BrowserRouter, Routes, Route } from "react-router-dom";
import TablaCategorias from "./componentes/categorias/TablaCategorias";
import Header from "./componentes/general/Header";
import Tarjetas from "./componentes/general/Tarjetas";
import FormProducto from "./componentes/productos/FormProductos";
import ListaProductos from "./componentes/productos/ListaProductos";
import FormEdicionCategoria from "./componentes/categorias/FormEdicionCategoria";
// Camilo
const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tarjetas />} exact></Route>
          <Route path="/categorias" element={<TablaCategorias />} exact></Route>
          <Route path="/categorias/form/:id" element={<FormEdicionCategoria/>} exact></Route>
          <Route path="/productos" element={<ListaProductos/> } exact></Route>
          <Route path="/productos/form" element={<FormProducto/>} exact></Route>
          <Route path="/productos/form/:id" element={<FormProducto/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
