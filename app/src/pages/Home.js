import React from "react";
import styles from "./styles.module.css";
import { getUser } from "../services/endpoints/user";
import { Link } from "react-router-dom";
import List from "../components/List";
function Home() {
  const handleUser = async () => {
    const user = "bragadaniel";

    await getUser(user)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.main}>
      <header className="App-header">
        <button type="button" onClick={handleUser}>
          Click-me
        </button>
        <Link to="/about">Ir para about</Link>
      </header>
      <div>
        <List userName="bragadaniel" />
      </div>
    </div>
  );
}

export default Home;
