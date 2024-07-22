import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
