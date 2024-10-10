import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function Search() {
  const [searched, setSearched] = useState(false);
  const [txt, setTxt] = useState("");
  const [players, setPlayers] = useState([]);
  const [find, setFind] = useState(false);
  const [ms, setMs] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!txt || txt == "") {
      setSearched(false);
    } else {
      setSearched(true);
      const getAll = async () => {
        setPlayers([]);
        setFind(false);
        try {
          const dt = await axios.post("http://localhost:3000/search", { txt });
          if (dt.data.ok) {
            setFind(true);
            setPlayers(dt.data.data);
          } else {
            setFind(false);
            setMs(dt.data.message);
          }
          // console.log({ players, find });
        } catch (error) {
          console.log(error);
        }
      };
      getAll();
    }
  };

  const FindAdjust = () => {
    return find ? (
      <div className="allc">
        {players.map((pl) => (
          <Card key={pl.player_id} player={pl} />
        ))}
      </div>
    ) : (
      <div className="no">
        <h1>{ms}</h1>
      </div>
    );
  };

  return (
    <div className="buscar">
      <div className="buscador">
        <h1>Buscador</h1>
        <form className="bsc" onSubmit={handleSubmit}>
          <input
            type="text"
            value={txt}
            onChange={(e) => setTxt(e.target.value)}
            placeholder="Busca un jugador.."
          />
          <button type="submit">Buscar</button>
        </form>
      </div>
      {searched ? (
        <FindAdjust />
      ) : (
        <div className="no">
          <h1>Busca Algo...</h1>
        </div>
      )}
    </div>
  );
}

export default Search;
