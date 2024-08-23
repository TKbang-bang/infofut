import React from "react";
import { NavLink, Link } from "react-router-dom";
import Homeicon from "../svg/Homeicon";
import Searchicon from "../svg/Searchicon";
import Phoneicon from "../svg/Phoneicon";
import Infoicon from "../svg/Infoicon";

function Header() {
  return (
    <header className="header">
      <div className="display">
        <Link to={"/"} className="logo">
          InfoFut
        </Link>
        <div className="menu"></div>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>
              <Homeicon></Homeicon>
              <p>Inicio</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/search"}>
              <Searchicon cl={"#4FFFB0"} />
              <p>Buscar</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>
              <Phoneicon></Phoneicon>
              <p>Contacto</p>
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>
              <Infoicon></Infoicon>
              <p>Sobre la página</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
