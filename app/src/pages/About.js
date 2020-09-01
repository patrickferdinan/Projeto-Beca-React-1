import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <header>
        <p>ABOUT.</p>
        <Link to="/">Ir para home</Link>
      </header>
    </div>
  );
}

export default About;
