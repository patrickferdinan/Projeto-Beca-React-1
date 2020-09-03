import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = ({ listMenu }) => {
  const items = () => {
    return listMenu.map((item) => (
      <li key={item.text} className={styles.item}>
        <Link to={item.path}>{item.text}</Link>
      </li>
    ));
  };

  return (
    <header className={styles.container}>
      <ul className={styles.list}>{items()}</ul>
    </header>
  );
};

export default Header;
