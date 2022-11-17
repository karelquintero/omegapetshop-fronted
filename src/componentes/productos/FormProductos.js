import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Estados from "../../enums/Estados";
import CategoriaServicios from "../../servicios/categoriaServicios";
import ProductoServicios from "../../servicios/ProductoServicios";

const FormProducto = () => { 

    const navigateTo = useNavigate();
    const { id } = useParams();
    const [ estado, setEstado ] = useState(Estados.LISTO);
    const [ nombre, setNombre ] = useState("");
    const [ marca, setMarca ] = useState("");
    const [ precio, setPrecio ] = useState(0);
    const [ categoria, setCategoria ] = useState("");
    const [ imagen, setImagen ] = useState("");
    const [ caracteristicas, setCaracteristicas ] = useState("");
    const [ disp, setDisp ] = useState(false);
    const [ listaCategorias, setTablaCategorias ] = useState([]);

    const cargarProducto = async() => {
        if (id!=null) {
            try {
                const respuesta = await ProductoServicios.cargarProducto(id);
                if (respuesta.data != null) {
                    setNombre(respuesta.data.nombre);
                    setMarca(respuesta.data.marca);
                    setPrecio(respuesta.data.precio);
                    setCategoria(respuesta.data.categorias);
                    setImagen(respuesta.data.imagen);
                    setCaracteristicas(respuesta.data.caracteristicas);
                    setDisp(respuesta.data.disp);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const cargarListaCategorias = async () => {
		setEstado(Estados.CARGANDO);
		try {
			const resultado = await CategoriaServicios.listarCategorias();
			if (resultado.data.length === 0) {
				setEstado(Estados.VACIO);
			}
			else {
				setTablaCategorias(resultado.data);
				setEstado(Estados.OK)
			}
		} catch (error) {
			setEstado(Estados.ERROR);
			console.log(error);
		}
	}
    const guardarProducto = async (event) => {
        event.preventDefault();
        if (categoria.length === 0) {
            throw new Error("No hay categorías disponibles");
        }
            const producto = {
                nombre: nombre,
                marca: marca,
                precio: parseInt(precio),
                categorias: categoria,
                imagen :imagen,
                caracteristicas : caracteristicas,
                disp :disp
            }
            console.log(producto);
        try {
            if (id==null) {
                await ProductoServicios.guardarProducto(producto);
            }
            else {
                await ProductoServicios.modificarProducto(id, producto);
            }
            navigateTo("/productos");
        } catch (error) {
            console.log(error);
        }
    }

    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    }

    const cambiarMarca = (event) => {
        setMarca(event.target.value);
    }

    const cambiarPrecio = (event) => {
        setPrecio(event.target.value);
    }

    const cambiarCategoria = (event) => {
        var options = Array.from(event.target.selectedOptions, option => option.value);
        setCategoria(options);
    }

    const cambiarImagen = (event) => {
        setImagen(event.target.value);
    }
    const cambiarCaracteristicas = (event) => {
        setCaracteristicas(event.target.value);
    }
    const cambiarDisp = (event) => {
        setDisp(event.target.checked);
    }

    useEffect(() => {
        cargarListaCategorias();
        cargarProducto();
    }, [])

    return (
        <form className="container">
            <h4 className="mb-3">Formulario de productos</h4>
            <div className="row">
                <div className="mb-3 col-4">
                    <label htmlFor="nombre" className="form-control-sm">Ingrese nombre</label>
                    <input type="text" className="form-control form-control-sm col-md-3" onChange={cambiarNombre} value={nombre} id="nombre" name="nombre" />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="nombre" className="form-control-sm">Ingrese caracteristicas</label>
                    <input type="text" className="form-control form-control-sm col-md-3" onChange={cambiarCaracteristicas} value={caracteristicas} id="caracteristicas" name="caracteristicas" />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="marca" className="form-control-sm">Ingrese marca</label>
                    <input type="text" className="form-control form-control-sm col-md-3" onChange={cambiarMarca} value={marca} id="marca" name="marca" />
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="precio" className="form-control-sm">Ingrese precio</label>
                    <input type="number" className="form-control form-control-sm col-md-3" onChange={cambiarPrecio} value={precio} id="precio" name="precio" />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col-4">
                    <label htmlFor="categoria" className="form-control-sm">Seleccione categoría</label>
                    <select className="form-select form-select-sm" aria-label="Categorias" onChange={cambiarCategoria} value={categoria} id="categoria" name="categoria">
                        <option defaultValue=""></option>
                        {
                            listaCategorias.map((categoria) => (
                                <option key={categoria.nombre} value={categoria.nombre}>{categoria.nombre}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="mb-3 col-4">
                    <label htmlFor="imagen" className="form-control-sm">Ingrese imagen</label>
                    <input type="text" className="form-control form-control-sm col-md-3" onChange={cambiarImagen} value={imagen} id="imagen" name="imagen" />
                </div>
                <div className="mb-3 col-3 mt-4">
                    <input className="form-check-input mt-3 me-2" type="checkbox" onChange={cambiarDisp} checked={disp} id="disp" name="disp"></input>
                    <label className="form-check-label form-control-sm mt-2" htmlFor="disponible">Disponible</label>
                </div>
            </div>
            <div>
                <div className="mb-3 col-2">
                    <button onClick={guardarProducto} className="btn btn-success btn-sm me-2">Guardar</button>
                    <a href="/productos" className="btn btn-light btn-sm me-2">Cancelar</a>
                </div>
            </div>
        </form>
    );
}

export default FormProducto;