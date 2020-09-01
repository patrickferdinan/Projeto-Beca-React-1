import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header>
        <p>HOME</p>
        <Link to="/about">Ir para about</Link>
      </header>
    </div>
  );
}

export default Home;
