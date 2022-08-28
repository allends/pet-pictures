import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import { NavigationBar, Title } from "./components/StyledComponents";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <div className="App">
      <NavigationBar>
        <Link style={{ textDecoration: "none" }} to="/">
          <Title>Pet Central!</Title>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/favorites">
          <Title>Favorites</Title>
        </Link>
      </NavigationBar>
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
