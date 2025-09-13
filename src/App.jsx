import React from "react";
import "./App.css";
import Ribbon from "./components/Ribbon/Ribbon";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Note from "./components/Note/Note.jsx";
import KeyFeature from "./components/KeyFeature/KeyFeature";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Ribbon />
      <Header />
      <HeroSection />
      <Note />
      <KeyFeature />
      <Footer />
    </>
  );
}

export default App;
