import axios from "axios";
import Config from "../Config";
const BASE = Config.API_URL+"/api/categorias";

const CategoriaServicios = {};

CategoriaServicios.listarCategorias = () => {
    return axios.get(BASE);
}

CategoriaServicios.buscarCategorias = (busqueda) => {
    return axios.get(BASE+"?q="+busqueda);
}

CategoriaServicios.cargarCategoria = (id) => {
    return axios.get(BASE+"/"+id);
}

CategoriaServicios.modificarCategoria = (id, body) => {
    return axios.put(BASE+"/"+id, body);
}

CategoriaServicios.guardarCategorias = (categoria) => {
    return axios.post(BASE, categoria);
}

CategoriaServicios.borrarCategoria = (id) => {
    return axios.delete(BASE+"/"+id);
}

export default CategoriaServicios;