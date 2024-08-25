import React, { useEffect, useState } from "react";

function Welcome() {
  const [numb, setNumb] = useState(null);

  useEffect(() => {
    let num = Math.floor(Math.random() * 14) + 1;
    setNumb(num);
    // console.log(num);
  }, []);

  return (
    <div className="welcome">
      <div className="slider">
        <img src={`img${numb}.jpg`} className="img show" />
      </div>
      <div className="ms">
        <h1>Bienvenido a mi Página Web</h1>
        <h1>InfoFut</h1>
      </div>
    </div>
  );
}

export default Welcome;
