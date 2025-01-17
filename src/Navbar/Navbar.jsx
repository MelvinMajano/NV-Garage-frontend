import { Link,NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid d-flex justify-content-between">
            <Link className="navbar-brand ms-3" to="/">
              NV/
            </Link>
            <div
              className="collapse navbar-collapse d-flex justify-content-end me-5"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <NavLink className="nav-link" to="/inicio">
                  Inicio
                </NavLink>
                <NavLink className="nav-link" to="/biblioteca">
                  Biblioteca
                </NavLink>
                <NavLink className="nav-link" to="/github">
                  Github
                </NavLink>
                <NavLink className="nav-link" to="/programas">
                  Programas
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </>
    )
}