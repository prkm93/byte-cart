import React from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductContext";
import { filterTypes } from "../../utils/constant";
import apparel_logo from "../../logos/apparel-icon.jpg";
import styles from "./Header.module.css";

const Header = () => {
  const { token, onLogoutHandler } = useAuth();
  const {
    productState: { searchProduct },
    productDispatch,
  } = useProducts();
  const { SEARCH_PRODUCT } = filterTypes;
  const navigate = useNavigate();

  return (
    <div className={styles.header_container}>
      <div className={styles.logo_container} onClick={() => navigate("/home")}>
        <img
          className={styles.cloth_logo}
          src={apparel_logo}
          alt="Apparel Logo"
        />{" "}
      </div>
      <div>
        <input
          className={styles.search_box}
          type="text"
          placeholder="search"
          value={searchProduct}
          onChange={(e) =>
            productDispatch({
              type: SEARCH_PRODUCT,
              payload: e.target.value,
            })
          }
        />
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
            <CiHeart
              className={styles.nav_item_icon}
              onClick={() =>
                token ? navigate("/wishlist") : navigate("/login")
              }
            />
          </li>
          <li className={styles.nav_item}>
            <IoCartOutline className={styles.nav_item_icon} />
          </li>
          {token && (
            <li className={styles.nav_item}>
              <button className={styles.btn_login} onClick={onLogoutHandler}>
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
