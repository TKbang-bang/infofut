import React, { useEffect, useState } from "react";
import axios from "axios";
import Clubs from "../components/Clubs";
import Selection from "../components/Selection";
import Solo from "../components/Solo";
import BackIcon from "../svg/BackIcon";

function Info() {
  const [player, setPlayer] = useState({});
  const [bio, setBio] = useState("");
  const [club, setClub] = useState([]);
  const [sel, setSel] = useState([]);
  const [solo, setSolo] = useState([]);
  const rg = "<<< Rgeresar";

  useEffect(() => {
    window.scroll(0, 0);
    const getAllData = async () => {
      const dt = await axios.get("http://localhost:3000/info");
      setPlayer(dt.data.player[0]);
      setBio(dt.data.bio[0].bio);
      setClub(dt.data.clubWin);
      setSel(dt.data.selcWin);
      setSolo(dt.data.soloWin);
      //   console.log(dt.data);
    };
    getAllData();
  }, []);

  return (
    <div className="allInfo">
      <div className="player">
        <button onClick={() => history.back()} className="back">
          <BackIcon fl={"#fff"} />
          <p>Regresar</p>
        </button>
        <img
          src={"http://localhost:3000/gallery/extra/" + player.img2}
          alt=""
        />
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
      {/* {console.log(solo)} */}
    </div>
  );
}

export default Info;
