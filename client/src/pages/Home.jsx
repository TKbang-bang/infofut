import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import AllCards from "../components/AllCards";
import History from "../components/History";

function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <main className="home">
      <Welcome />
      <AllCards />
      <History />
    </main>
  );
}

export default Home;
