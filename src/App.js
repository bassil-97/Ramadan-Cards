import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import RamadanCountdown from "./components/RamadanCountdown/RamadanCountdown";
import CardDisplay from "./components/CardTemplate/CardDisplay";
import NotFound from "./components/UI/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  let homeRoutes = (
    <React.Fragment>
      <Navbar />
      <Home />
      <RamadanCountdown />
    </React.Fragment>
  );

  return (
    <div className="App">
      <Routes>
        <Route path="/home" exact element={homeRoutes} />
        <Route path="/card" element={<CardDisplay />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
