import React from "react";
import { BallTriangle } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <BallTriangle
        radius={5}
        color="#6f2251"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
