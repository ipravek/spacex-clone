import React from "react";
import styles from "@/components/button/Button.module.css";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <div className={styles.animate}></div>
      <button
        className={`${styles.button} ${styles.animate}`}
        onClick={onClick}
      >
        {name ? name : "click"}
      </button>
    </div>
  );
};

export default Button;
