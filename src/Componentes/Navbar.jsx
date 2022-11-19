import logo from '../GR_Logo.png'
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid">
        <img src={logo} width="100px" alt="logo.png" />
        <div class="collapse navbar-collapse ms-4"  id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="http://localhost:3000/">
                Movimientos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="http://localhost:3000/Stock">
                Stock
              </a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
}
