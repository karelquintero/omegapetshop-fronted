import categoriaServicios from "../../servicios/categoriaServicios";
import Estados from "../../enums/Estados";
import { useEffect } from "react";
import { useState } from "react";

const TablaCategorias = () => {
    
    const [ estado, setEstado ] = useState(Estados.CARGANDO);
    const [ listaCategorias, setListaCategorias ] = useState([]);
    const [ busqueda, setBusqueda ] = useState("");
    const [ nombre, setNombre ] = useState("");
    const [ imagen, setImagen ] = useState("");
    const [ activo, setActivo ] = useState(false);
    const [ idBorrar, setIdBorrar ] = useState("");
    const [ categoriaBorrar, setCategoriaBorrar ] = useState("");

    const cargarDatos = async () => {
        try {
            const respuesta = await categoriaServicios.listarCategorias();
            if (respuesta.data.length > 0) {
                setListaCategorias(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
            console.log(error);
        }
    }

    useEffect(() => {
        cargarDatos();
    }, [])

    const buscarCategoria = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await categoriaServicios.buscarCategorias(busqueda);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListaCategorias(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
            console.log(error);
        }
    }

    const confirmarBorrado = (id, categoria) => {
        setIdBorrar(id);
        setCategoriaBorrar(categoria);
    }

    const guardarCategoria = async (event) => {
        event.preventDefault();
        try {
            const categoria = {
                nombre: nombre,
                imagen: imagen,
                activo: activo
            }
            await categoriaServicios.guardarCategorias(categoria);
            cargarDatos();
            setNombre("");
            setImagen("");
            setActivo(false);
        } catch (error) {
            
        }
    }

    const borrarCategoria = async () => {
        try {
            await categoriaServicios.borrarCategoria(idBorrar);
            cargarDatos();
        } catch (error) {
            
        }
    }

    const cambiarCriterio = (event) => {
        setBusqueda(event.target.value);
    }

    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    }

    const cambiarImagen = (event) => {
        setImagen(event.target.value);
    }

    const cambiarActivo = (event) => {
        setActivo(event.target.checked);
    }

    return (
        <div className="container">
            <h4 className="d-flex justify-content-center">Categorías de productos</h4>
            <form action="">
                <div className="row">
                    <div className="mb-3 col-4">
                        <input type="text" onChange={cambiarCriterio} value={busqueda} className="form-control form-control-sm col-md-3" id="busqueda" name="busqueda" placeholder="Ingrese dato a buscar" />
                    </div>
                    <div className="col-1">
                        <button className="btn btn-sm btn-primary" onClick={buscarCategoria}>Buscar</button>
                    </div>
                </div>
            </form>
            <div id="tabla">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Imagen</th>
                            <th>Activo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            estado === Estados.ERROR ? (
                                <tr><td>Ocurrió un error...</td></tr>
                            )
                                :
                                estado === Estados.CARGANDO ? (
                                    <tr><td>Cargando...</td></tr>
                                )
                                    :
                                    estado === Estados.VACIO ? (
                                        <tr><td>No hay datos</td></tr>
                                    )
                                        :
                                        listaCategorias.map((categoria) => (
                                            <tr key={categoria._id}>
                                                <td>{categoria.nombre}</td>
                                                <td>{categoria.imagen}</td>
                                                <td>{categoria.activo ? "Sí" : "No"}</td>
                                                <td>
                                                    <a href={"/categorias/form/" + categoria._id} className="btn btn-sm btn-success">Editar</a>
                                                    <button onClick={() => {confirmarBorrado(categoria._id, categoria.nombre)}} className="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#modalBorrar">Eliminar</button>
                                                </td>
                                            </tr>
                                        ))
                        }
                    </tbody>
                </table>
            </div>
            <h4 className="d-flex justify-content-center mt-5">Añadir categoría</h4>
            <div id="formulario">
                <form onSubmit={guardarCategoria}>
                    <div className="row">
                        <div className="mb-3 col-4">
                            <input type="text" className="form-control form-control-sm col-md-3" id="nombre" name="nombre" value={nombre} onChange={cambiarNombre} placeholder="Ingrese categoría" required />
                        </div>
                        <div className="mb-3 col-3">
                            <input className="form-control form-control-sm" id="imagen" name="imagen" value={imagen} onChange={cambiarImagen} type="text" placeholder="Ingrese nombre de archivo" required></input>
                        </div>
                        <div className="mb-3 col-3">
                            <input className="form-check-input me-2" type="checkbox" id="activo" name="activo" onChange={cambiarActivo} checked={activo}></input>
                            <label className="form-check-label" htmlFor="activo">Activo</label>
                        </div>
                        <div className="mb-3 col-2">
                            <button className="btn btn-success btn-sm me-2">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className="modal fade" id="modalBorrar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Alerta de eliminación</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">    
                            Desea borrar esta categoria: {categoriaBorrar}? 
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancelar</button>
                            <button onClick={borrarCategoria} type="button" className="btn btn-danger" data-bs-dismiss="modal">Borrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default TablaCategorias;