import React from "react";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import apparel_logo from "../../logos/apparel-icon.jpg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container}>
        <img
          className={styles.cloth_logo}
          src={apparel_logo}
          alt="Apparel Logo"
        />{" "}
      </div>
      <div>
        <input className={styles.search_box} type="text" placeholder="search" />
        <CiSearch className={styles.search_icon} />
      </div>
      <div>
        <ul className={styles.nav_links}>
          <li className={styles.nav_item}>
            <a className={styles.nav_explore_link} href="/products">
              Explore
            </a>
          </li>
          <li className={styles.nav_item}>
            <button className={styles.btn_login}>Login</button>
          </li>
          <li className={styles.nav_item}>
            <CiHeart className={styles.nav_item_icon} />
          </li>
          <li className={styles.nav_item}>
            <IoCartOutline className={styles.nav_item_icon} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
