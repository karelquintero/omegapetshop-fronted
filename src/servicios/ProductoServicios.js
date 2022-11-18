import axios from "axios";
import Config from "../Config";
const BASE = Config.API_URL+"/api/productos";

const ProductoServicios = {};

ProductoServicios.listarProductos = () => {
    return axios.get(BASE);
}

ProductoServicios.guardarProducto = (producto) => {
    return axios.post(BASE, producto);
}

ProductoServicios.cargarProducto = (id) => {
    return axios.get(BASE+"/"+id);
}

ProductoServicios.modificarProducto = (id, body) => {
    return axios.put(BASE+"/"+id, body);
}

export default ProductoServicios;