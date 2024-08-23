import React from "react";
import Welcome from "../components/Welcome";
import AllCards from "../components/AllCards";
import History from "../components/History";

function Home() {
  return (
    <main className="home">
      <Welcome />
      <AllCards />
      <History />
    </main>
  );
}

export default Home;
