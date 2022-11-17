import axios from "axios";
//const URI = "https://kecco-tienda-api.herokuapp.com/";
const ProductoServicios = {};

ProductoServicios.listarProductos = () => {
    return axios.get("http://localhost:8000/api/productos");
}

ProductoServicios.cargarProducto = (id) => {
    return axios.get("http://localhost:8000/api/productos/"+id);
}

ProductoServicios.modificarProducto = (id, body) => {
    return axios.put("http://localhost:8000/api/productos/"+id, body);
}

ProductoServicios.guardarProducto = (producto) => {
    return axios.post("http://localhost:8000/api/productos", producto);
}

export default ProductoServicios;