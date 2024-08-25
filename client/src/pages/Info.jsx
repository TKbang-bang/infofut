import React, { useEffect, useState } from "react";
import axios from "axios";
import Clubs from "../components/Clubs";
import Selection from "../components/Selection";
import Solo from "../components/Solo";
import BackIcon from "../svg/BackIcon";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function Info() {
  const [player, setPlayer] = useState({});
  const [bio, setBio] = useState("");
  const [club, setClub] = useState([]);
  const [sel, setSel] = useState([]);
  const [solo, setSolo] = useState([]);

  useEffect(() => {
    window.scroll(0, 0);
    const getAllData = async () => {
      const dt = await axios.get(`${URL}/info`);
      setPlayer(dt.data.player[0]);
      setBio(dt.data.bio[0].bio);
      setClub(dt.data.clubWin);
      setSel(dt.data.selcWin);
      setSolo(dt.data.soloWin);
    };
    getAllData();
  }, []);

  return (
    <div className="allInfo">
      <div className="player">
        <img src={`${URL}/gallery/extra/${player.img2}`} alt="" />
        <button onClick={() => history.back()} className="back">
          <BackIcon fl={"#fff"} />
          <p>Regresar</p>
        </button>
        <h3>{player.name}</h3>
        <p>{player.country}</p>
        <p>{player.age}</p>
        <p>{player.current_team}</p>
      </div>
      <h1>Trofeos</h1>
      <Clubs club={club} />
      <Selection sel={sel} />
      <Solo solo={solo} />
      <div className="bio">
        <h3>Biografía corta</h3>
        <p className="biop">{bio}</p>
      </div>
    </div>
  );
}

export default Info;
