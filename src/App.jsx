import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../pages/Home";
import Projects from "../pages/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
