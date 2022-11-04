import axios from "axios";

const categoriaServicios = {};

categoriaServicios.listarCategorias = () => {
    return axios.get("http://localhost:8000/api/categorias");
}

categoriaServicios.buscarCategorias = (busqueda) => {
    return axios.get("http://localhost:8000/api/categorias?q="+busqueda);
}

categoriaServicios.cargarCategoria = (id) => {
    return axios.get("http://localhost:8000/api/categorias/"+id);
}

categoriaServicios.modificarCategoria = (id, body) => {
    return axios.put("http://localhost:8000/api/categorias/"+id, body);
}

categoriaServicios.guardarCategorias = (categoria) => {
    return axios.post("http://localhost:8000/api/categorias", categoria);
}

export default categoriaServicios;