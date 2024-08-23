import React, { useState } from "react";
import Searchicon from "../svg/Searchicon";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/Card";

function Search() {
  const [searched, setSearched] = useState(false);
  const [txt, setTxt] = useState("");
  const [players, setPlayers] = useState([]);
  const [find, setFind] = useState(false);

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
          const dt = await axios.get("http://localhost:3000/search");
          let temp = [];
          dt.data.map((d) => {
            if (d.name.toLocaleLowerCase().includes(txt.toLocaleLowerCase())) {
              setFind(true);
              temp.unshift(d);
              setPlayers([...temp]);
              console.log(d);
            }
          });
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
        <h1>No se encontro el jugador</h1>
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
          <button type="submit">
            <Searchicon cl={"#4FFFB0"} />
          </button>
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
