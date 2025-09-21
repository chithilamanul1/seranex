import React from "react";
import "./App.css";
import FuturisticNavigation from "./components/FuturisticNavigation";
import FuturisticHero from "./components/FuturisticHero";
import FuturisticServices from "./components/FuturisticServices";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App">
      <FuturisticNavigation />
      <FuturisticHero />
      <FuturisticServices />
      <TechStack />
    </div>
  );
}

export default App;