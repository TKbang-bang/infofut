import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function Card({ player }) {
  const playerId = player.player_id;

  const handleClick = async () => {
    try {
      await axios.post(`${URL}/putid`, { playerId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <img src={`${URL}/gallery/profiles/${player.img1}`} alt="" />
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
