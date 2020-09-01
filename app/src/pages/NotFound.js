import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <header>
        <p>NotFound.</p>
        <Link to="/">Ir para home</Link>
      </header>
    </div>
  );
}

export default NotFound;
