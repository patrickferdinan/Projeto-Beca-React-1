import React from "react";
import styles from "./styles.module.css";

const Input = ({ type, placeholder, onChange, onBlur, error }) => {
  return (
    <div className={styles.customInput}>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <span className={styles.error}>Campo não pode ser vazio</span>}
    </div>
  );
};

export default Input;
