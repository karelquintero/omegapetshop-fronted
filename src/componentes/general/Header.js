const Header = () => {
    return (
        <div class="container">
            <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <strong style={{ color: 'blue' }}>Omega</strong><strong style={{ color: 'black' }}>PetShop</strong>
                </a>

                <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" class="nav-link px-2 link-secondary">Inicio</a></li>
                    <li><a href="/categorias" class="nav-link px-2 link-dark">Categorías</a></li>
                    <li><a href="/productos" class="nav-link px-2 link-dark">Productos</a></li>
                </ul>

                <div class="col-md-3 text-end">
                    <button type="button" class="btn btn-outline-primary me-2">Acceso</button>
                    <button type="button" class="btn btn-primary">Inscribirse</button>
                </div>
            </header>
        </div>)
}

export default Header;