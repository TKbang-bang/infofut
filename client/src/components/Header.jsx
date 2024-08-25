import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="display">
        <Link to={"/"} className="logo">
          InfoFut
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>Buscar</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contacto</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>Sobre la página</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
