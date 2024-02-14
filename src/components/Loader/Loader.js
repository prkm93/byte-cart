import React from "react";
import { BallTriangle } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#6f2251"
        ariaLabel="ball-triangle-loading"
        // wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
