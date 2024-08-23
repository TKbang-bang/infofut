import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card.jsx";

function AllCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const func = async () => {
      try {
        const dt = await axios.get("http://localhost:3000");
        setData(dt.data);
      } catch (error) {
        console.log(error);
      }
    };
    func();
  }, []);

  return (
    <div className="allc">
      {data.map((player) => {
        return <Card key={player.player_id} player={player} />;
      })}
    </div>
  );
}

export default AllCards;
