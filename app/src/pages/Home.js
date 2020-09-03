import React, { useState } from "react";
import styles from "./styles.module.css";

import { getRepos } from "../services/endpoints/repository";
import { getUser } from "../services/endpoints/user";

import List from "../components/List";
import Input from "../components/Input";
import Container from "../components/Container";
import Header from "../components/Header";
import Button from "../components/Button";
import Avatar from "../components/Avatar";

function Home() {
  const [user, setUser] = useState("");
  const [dataRepo, setDataRepo] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleUser = async () => {
    if (user === "") {
      setError(true);
      return null;
    }
    setError(false);
    setLoading(true);

    await getUser(user)
      .then((response) => setDataUser(response.data))
      .catch((err) => console.log(err));

    await getRepos(user)
      .then((response) => {
        setDataRepo(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  const handleBlur = (e) => setUser(e.currentTarget.value);

  const menuItem = [
    { text: "Início", path: "/" },
    { text: "Sobre", path: "/about" },
  ];

  return (
    <>
      <Header listMenu={menuItem} />
      <Container>
        <div className={styles.searchBar}>
          <Input
            error={error}
            placeholder="Digite o usuário"
            onBlur={handleBlur}
          />
          <Button
            text="Search"
            onClick={handleUser}
            loading={loading}
            disabled={loading}
          />
        </div>

        {dataRepo.length !== 0 && (
          <div className={styles.dataUser}>
            <Avatar avatarUrl={dataUser.avatar_url} altText={dataUser.name} />

            <List data={dataRepo} />
          </div>
        )}
      </Container>
    </>
  );
}

export default Home;
