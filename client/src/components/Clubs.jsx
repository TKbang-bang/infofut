import React from "react";

function Clubs({ club }) {
  return (
    <table className="club">
      <caption>Tofeos con clubes</caption>
      <thead>
        <tr>
          <th className="uno">Competicion</th>
          <th>Año</th>
          <th>Équipo</th>
        </tr>
      </thead>
      <tbody>
        {club.map((cl) => {
          return (
            <tr key={crypto.randomUUID()}>
              <td className="uno">{cl.competition}</td>
              <td>{cl.year}</td>
              <td>{cl.team}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Clubs;
