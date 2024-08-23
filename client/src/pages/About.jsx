import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <h1>Sobre esta página</h1>
      <p>
        <span>InfoFut</span> fue creada para dar información sobre algunos de
        los jugadores de fútbol, tanto sus trofeos con sus respectivos clubes y
        selección en la que pertenecen.
      </p>
      <p>
        Las informaciones encontradas en esta página en pocos casos no estan
        completos del todo, este puede que es por falta de busqueda de
        información o por no tener suficientes fuentes de información o también
        encontrar informaciones no tan fiables.
      </p>
      <p>
        Se ha hecho el mayor esfuerzo para trarele buenas y completas
        informaciones sobre los pocos jugadores que se muestran en esta página a
        los usuarios que han visitado esta página web. Por favor disfrute
      </p>

      <h1 className="cr">Creador de la Página Web</h1>
      <p>
        Esta Página Web fue codificada por completo por Woodely Tanis Klavensky
        (TK) el 22 de agosto del 2024. Se había tenido la idea de codificarla
        desde el año 2022, la razon del tiempo tomado para codificarla se debió
        simplemente al aprendizaje de lenguas de programacion tal como{" "}
        <span>HTML</span>, <span>Css</span>, <span>Javascript</span>,{" "}
        <span>React</span>, <span>Node js</span> y <span>MySql</span>, luego de
        tener estas habilidades en la rama de la programación me puse a
        codificar la página para probar mis habilidades en la programación,
        aunque no son de los mejores estoy satisfecho de mi obra.
      </p>
      <p>
        Hay que decir que hay más proyectos que van a salir al público. Favor
        qudarse en <Link to={"/contact"}>Contacto</Link>.
      </p>
      <p>Espero que haya disfrutado la página</p>
    </div>
  );
}

export default About;
