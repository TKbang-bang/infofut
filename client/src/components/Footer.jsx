import React from "react";
import { Link } from "react-router-dom";
import Github from "../svg/Github";
import Copyright from "../svg/Copyright";

function Footer() {
  return (
    <footer className="footer">
      <div className="uno">
        <div className="u">
          <Link to={"https://github.com/TKbang-bang?tab=repositories"}>
            <p>Github</p>
            <Github />
          </Link>
        </div>
        <div className="n">
          <h3>Atajos</h3>
          <div>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/search"}>Buscar</Link>
            <Link to={"/contact"}>Contacto</Link>
            <Link to={"/about"}>Sobre la página</Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="dos">
        <p>
          <Copyright />
          Esta página fue programada por{" "}
          <Link target="_blank" to={"https://www.instagram.com/tk_woodley/"}>
            Woodley TK
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
