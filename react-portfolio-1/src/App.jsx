import { useState } from "react";
import styles from "./App.module.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Connect from "./Components/Connect";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About/>
      <Skills/>
      <Connect/>
    </div>
  );
}

export default App;
