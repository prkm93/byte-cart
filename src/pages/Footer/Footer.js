import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_icons}>
        <FaTwitter className={styles.footer_icon} />
        <FaGithubSquare className={styles.footer_icon} />
        <FaLinkedin className={styles.footer_icon} />
      </div>
      <div className={styles.footer_copyright}>&#169; No Copyright</div>
    </div>
  );
};

export default Footer;
