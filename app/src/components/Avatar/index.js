import React from "react";
import styles from "./styles.module.css";

const Avatar = ({ avatarUrl, altText }) => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={avatarUrl} alt={altText} />
    </div>
  );
};

export default Avatar;
