import Kecco from "../images/Kecco.svg";
const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                <img src={Kecco} alt="perrogato" width="75" height="75"/>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" className="nav-link px-2 link-secondary">Inicio</a></li>
                    <li><a href="/categorias" className="nav-link px-2 link-dark">Categorías</a></li>
                    <li><a href="/productos" className="nav-link px-2 link-dark">Productos</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Acceso</button>
                    <button type="button" className="btn btn-primary">Inscribirse</button>
                </div>
            </header>
        </div>)
}

export default Header;