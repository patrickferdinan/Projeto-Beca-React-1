import React from "react";

import styles from "./styles.module.css";

const List = ({ data }) => {
  const list = () => {
    return data.map((item) => (
      <li key={item.id} className={styles.item}>
        <p className={styles.repoName}>Title: {item.name}</p>
        <a href={item.html_url}>{item.full_name}</a>
      </li>
    ));
  };

  return <ul className={styles.containerList}>{list()}</ul>;
};

export default List;
