import React from "react";

function Selection({ sel }) {
  return (
    <table className="sel">
      <caption>Tofeos con seleccion</caption>
      <thead>
        <tr>
          <th className="uno">Competicion</th>
          <th>Año</th>
          <th>Équipo</th>
        </tr>
      </thead>
      <tbody>
        {sel.map((cl) => {
          return (
            <tr key={crypto.randomUUID()}>
              <td className="uno">{cl.competition}</td>
              <td>{cl.year}</td>
              <td>{cl.selection}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Selection;
