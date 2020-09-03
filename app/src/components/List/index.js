import React, { useState, useEffect } from "react";
import { getRepos } from "../../services/endpoints/repository";
import styles from "./styles.module.css";

const List = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const repos = async () =>
      await getRepos(props.userName)
        .then((response) => setData(response.data))
        .catch((err) => console.error(err));

    repos();
  }, []);

  const list = () => {
    return data.map((item) => (
      <li key={item.id} className={styles.item}>
        <p className={styles.repoName}>Name: {item.name}</p>
        <a href={item.url}>{item.full_name}</a>
      </li>
    ));
  };

  return <ul>{list()}</ul>;
};

export default List;
