import React from "react";
import "./App.css";
import FuturisticNavigation from "./components/FuturisticNavigation";
import FuturisticHero from "./components/FuturisticHero";
import FuturisticServices from "./components/FuturisticServices";
import TechStack from "./components/TechStack";
import FuturisticPortfolio from "./components/FuturisticPortfolio";
import FuturisticAbout from "./components/FuturisticAbout";
import FuturisticContact from "./components/FuturisticContact";

function App() {
  return (
    <div className="App">
      <FuturisticNavigation />
      <FuturisticHero />
      <FuturisticServices />
      <TechStack />
      <FuturisticPortfolio />
      <FuturisticAbout />
      <FuturisticContact />
    </div>
  );
}

export default App;