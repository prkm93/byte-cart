import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

import { useAuth } from "../../context/AuthContext";
import { useProducts } from "../../context/ProductContext";
import { useWishlist } from "../../context/WishlistContext";
import { useCart } from "../../context/CartContext";
import { filterActionTypes } from "../../utils/constant";
import apparel_logo from "../../logos/apparel-icon.jpg";
import styles from "./Header.module.css";

const Header = () => {
  const { token, onLogoutHandler } = useAuth();
  const {
    productState: { searchProduct },
    productDispatch,
    handleLoader,
  } = useProducts();
  const {
    wishlistState: { wishlistProducts },
  } = useWishlist();
  const {
    cartState: { cartItemList },
  } = useCart();
  const { SEARCH_PRODUCT } = filterActionTypes;
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
      <ul className={styles.nav_links}>
        <li className={styles.nav_item}>
          <Link
            className={styles.nav_explore_link}
            onClick={() => {
              handleLoader(true);
              setTimeout(() => {
                handleLoader(false);
                navigate("/products");
              }, 500);
            }}>
            Explore
          </Link>
        </li>
        <li className={styles.nav_item}>
          {token ? (
            <CgProfile
              className={styles.profile_icon}
              onClick={() => navigate("/profile")}
            />
          ) : (
            <button
              className={styles.btn_login}
              onClick={() => navigate("/login")}>
              Login
            </button>
          )}
        </li>
        <li className={styles.nav_item}>
          <div className={styles.nav_icon_container}>
            <CiHeart
              className={styles.nav_item_icon}
              onClick={() =>
                token ? navigate("/wishlist") : navigate("/login")
              }
            />
            {token && wishlistProducts.length > 0 && (
              <div className={styles.wishlist_count}>
                {wishlistProducts.length}
              </div>
            )}
          </div>
        </li>
        <li className={styles.nav_item}>
          <div className={styles.nav_icon_container}>
            <IoCartOutline
              className={styles.nav_item_icon}
              onClick={() => navigate("/cartlist")}
            />
            {token && cartItemList.length > 0 && (
              <div className={styles.wishlist_count}>{cartItemList.length}</div>
            )}
          </div>
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
  );
};

export default Header;
