import React from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.main}>
      <header className="App-header">
        <p>ABOUT.</p>
        <Link to="/">Ir para home</Link>
      </header>
    </div>
  );
}

export default About;
