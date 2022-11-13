import axios from "axios";
const URI = "https://kecco-tienda-api.herokuapp.com/";
const ProductoServicios = {};

ProductoServicios.listarProductos = () => {
    return axios.get(URI+"api/productos");
}

ProductoServicios.guardarProducto = (producto) => {
    return axios.post(URI+"api/productos", producto);
}

export default ProductoServicios;