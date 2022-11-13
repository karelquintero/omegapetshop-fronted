import axios from "axios";
const URI = "https://kecco-tienda-api.herokuapp.com/";

const CategoriaServicios = {};

CategoriaServicios.listarCategorias = () => {
    return axios.get(URI+"api/categorias");
}

CategoriaServicios.buscarCategorias = (busqueda) => {
    return axios.get(URI+"api/categorias?q="+busqueda);
}

CategoriaServicios.cargarCategoria = (id) => {
    return axios.get(URI+"api/categorias/"+id);
}

CategoriaServicios.modificarCategoria = (id, body) => {
    return axios.put(URI+"api/categorias/"+id, body);
}

CategoriaServicios.guardarCategorias = (categoria) => {
    return axios.post(URI+"api/categorias", categoria);
}

CategoriaServicios.borrarCategoria = (id) => {
    return axios.delete(URI+"api/categorias/"+id);
}

export default CategoriaServicios;