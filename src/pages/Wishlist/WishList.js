import React from "react";

import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../Product/ProductCard";
import styles from "./Wishlist.module.css";

const Wishlist = () => {
  const {
    wishlistState: { wishlistProducts },
  } = useWishlist();

  document.title = "Wishlist | Retail Store";

  return (
    <div className={styles.wishlist_container}>
      <h3 className={styles.wishlist_header}>
        My Wishlist ({wishlistProducts.length})
      </h3>
      {wishlistProducts?.length > 0 ? (
        <div className={styles.productList}>
          {wishlistProducts?.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      ) : (
        <div className={styles.product_unavailable}>
          Oops, no product found! Add your favourite items here!
        </div>
      )}
    </div>
  );
};

export default Wishlist;
