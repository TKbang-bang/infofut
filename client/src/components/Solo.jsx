import React from "react";

function Solo({ solo }) {
  return (
    <table className="solo">
      <caption>Titulos en solitario</caption>
      <thead>
        <tr>
          <th className="uno">Título</th>
          <th>Año</th>
        </tr>
      </thead>
      <tbody>
        {solo.map((cl) => {
          return (
            <tr key={crypto.randomUUID()}>
              <td className="uno">{cl.premio}</td>
              <td>{cl.year}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Solo;
