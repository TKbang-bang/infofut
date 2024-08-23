import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function Card({ player }) {
  const playerId = player.player_id;

  const handleClick = async () => {
    try {
      axios.post("http://localhost:3000/putid", { playerId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <img
        src={"http://localhost:3000/gallery/profiles/" + player.img1}
        alt=""
      />
      <div className="info">
        <h3>{player.name}</h3>
        <p>{player.age}</p>
        <p>{player.country}</p>
        <p>{player.current_team}</p>
        <Link onClick={handleClick} to={"/info"}>
          Saber más
        </Link>
      </div>
    </div>
  );
}

export default Card;
