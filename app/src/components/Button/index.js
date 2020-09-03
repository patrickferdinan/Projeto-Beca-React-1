import React from "react";
import styles from "./styles.module.css";

const Button = ({ type, onClick, text, disabled }) => {
  return (
    <button
      className={styles.btn}
      type={type ? type : "button"}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
