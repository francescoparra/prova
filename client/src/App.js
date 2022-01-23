import React from "react";
import "./style/main/app.scss"
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UserLog from "./pages/UserLog";
import Test from "./pages/Test";
import About from "./pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/user" element={<UserLog />} />
        <Route exact path="/test" element={<Test />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
