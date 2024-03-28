// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" ">
      <ul className="flex">
        <li className="px-6">
          <Link to="/">Inicio y Autenticación</Link>
        </li>
        <li className="px-6">
          <Link to="/usuarios">Gestión de Usuarios</Link>
        </li>
        <li className="px-6">
          <Link to="prestamos">Operaciones de Préstamo</Link>
        </li>
      </ul>
    </nav>


  )

    
}

export default Navbar;