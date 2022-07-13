import React from "react";
import "./style/main/app.scss"
import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Test from "./pages/Test";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<Register />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
