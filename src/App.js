import Home from "./components/Home.js";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Details from "./components/Details.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/wow" element={<Details />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
