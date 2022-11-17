import axios from "axios";
//const URI = "https://kecco-tienda-api.herokuapp.com/";

const CategoriaServicios = {};

CategoriaServicios.listarCategorias = () => {
    return axios.get("http://localhost:8000/api/categorias");
}

CategoriaServicios.buscarCategorias = (busqueda) => {
    return axios.get("http://localhost:8000/api/categorias?q="+busqueda);
}

CategoriaServicios.cargarCategoria = (id) => {
    return axios.get("http://localhost:8000/api/categorias/"+id);
}

CategoriaServicios.modificarCategoria = (id, body) => {
    return axios.put("http://localhost:8000/api/categorias/"+id, body);
}

CategoriaServicios.guardarCategorias = (categoria) => {
    return axios.post("http://localhost:8000/api/categorias", categoria);
}

CategoriaServicios.borrarCategoria = (id) => {
    return axios.delete("http://localhost:8000/api/categorias/"+id);
}

export default CategoriaServicios;