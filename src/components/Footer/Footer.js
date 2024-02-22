import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_icons}>
        <Link target="_blank" to="https://twitter.com/Pradeep25015855">
          <FaTwitter className={styles.footer_icon} />
        </Link>
        <Link target="_blank" to="https://github.com/prkm93">
          <FaGithubSquare className={styles.footer_icon} />
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/pradeep-maurya-47875a12a/">
          <FaLinkedin className={styles.footer_icon} />
        </Link>
      </div>
      <div className={styles.footer_copyright}>&#169; No Copyright</div>
    </div>
  );
};

export default Footer;
