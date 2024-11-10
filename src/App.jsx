import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";
import Mission from "./components/Mission";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
      <AboutUs />

      {/* Benefits Section */}
      <Benefits />

      {/* Mission Section */}
      <Mission />
    </div>
  );
}

export default App;
