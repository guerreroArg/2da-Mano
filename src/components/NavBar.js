import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";


const Navbar = () => {
  return (
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <img src="./img/2damano.png" alt="Logo" class="logo" />
          <a class="navbar-brand" href="#">2daMano</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Rubros
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Muebles</a></li>
                  <li><a class="dropdown-item" href="#">Electro</a></li>
                  <li><a class="dropdown-item" href="#">Ropa</a></li>
                  <li><a class="dropdown-item" href="#">Juguetes</a></li>
                  <li><a class="dropdown-item" href="#">Calzados</a></li>
                  <li><a class="dropdown-item" href="#">Varios</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="#">Sobre nosotros</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
              </li>
            </ul>
            <CartWidget />
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
        <main>
          <ItemListContainer />
        </main>
      </nav>
    </header>

  );
}

export default Navbar; 