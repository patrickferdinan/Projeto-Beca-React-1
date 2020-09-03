import React from "react";
import styles from "./styles.module.css";

const Container = ({ children }) => (
  <main className={styles.container}>{children}</main>
);

export default Container;
