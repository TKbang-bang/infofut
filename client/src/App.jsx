import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Info from "./pages/Info";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Contacts from "./pages/Contacts";
import About from "./pages/About";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:name" element={<Info />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
