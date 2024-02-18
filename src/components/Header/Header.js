import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import { useAuth } from "../../context/AuthContext";
import apparel_logo from "../../logos/apparel-icon.jpg";
import styles from "./Header.module.css";

const Header = () => {
  const { token, setToken, userDetails } = useAuth();
  const navigate = useNavigate();
  console.log("token ==>", token);
  //   useEffect(() => {
  //     setToken(localStorage.getItem("userInfo"));
  //   }, [token]);

  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container} onClick={() => navigate("/")}>
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
            {token ? (
              <CgProfile className={styles.profile_icon} />
            ) : (
              <button
                className={styles.btn_login}
                onClick={() => navigate("/login")}>
                Login
              </button>
            )}
          </li>
          <li className={styles.nav_item}>
            <CiHeart className={styles.nav_item_icon} />
          </li>
          <li className={styles.nav_item}>
            <IoCartOutline className={styles.nav_item_icon} />
          </li>
          {token && (
            <li className={styles.nav_item}>
              <button
                className={styles.btn_login}
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  setToken("");
                  navigate("/login");
                }}>
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
