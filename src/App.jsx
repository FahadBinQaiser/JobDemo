import React from "react";
import "./App.css";
import Ribbon from "./components/Ribbon/Ribbon";
import HeroSection from "./components/HeroSection/HeroSection";
import Note from "./components/Note/Note.jsx";
import KeyFeature from "./components/KeyFeature/KeyFeature";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Ribbon />
      <HeroSection />
      <Note />
      <KeyFeature />
      <Footer />
    </>
  );
}

export default App;
