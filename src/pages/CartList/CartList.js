import React from "react";

import CartItemCard from "./CartItemCard";
import { useCart } from "../../context/CartContext";
import { currencyFormatter, discountedPrice } from "../../utils/utils";
import styles from "./CartList.module.css";
import { useNavigate } from "react-router-dom";

const CartList = () => {
  const {
    cartState: { cartItemList },
  } = useCart();
  const navigate = useNavigate();

  document.title = "Cart |  Retail Store";

  const totalPrice = cartItemList.reduce(
    (total, item) =>
      total +
      item.qty *
        discountedPrice(item.price, Math.floor(item.discountPercentage)),
    0
  );

  const actualTotalPrice = cartItemList.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const token = JSON.parse(localStorage.getItem("userInfo"))?.encodedToken;

  return (
    <div className={styles.cart_container}>
      <h3 className={styles.cart_header}>My Cart ({cartItemList.length})</h3>
      {cartItemList.length > 0 ? (
        <div className={styles.cart_wrapper}>
          <div className={styles.cart_items_list}>
            {cartItemList.map((item) => {
              return <CartItemCard key={item._id} cartItem={item} />;
            })}
          </div>
          <div className={styles.cart_price_details}>
            <div className={styles.cart_price_details_header}>
              Cart Price Details
            </div>
            <hr className={styles.price_header_divider} />
            {cartItemList.map((item) => {
              const { _id, title, qty, price, discountPercentage } = item;
              return (
                <div key={_id} className={styles.cart_product_price_details}>
                  <div>
                    {title} ({qty})
                  </div>
                  <div>
                    {currencyFormatter.format(
                      Number(qty) *
                        discountedPrice(price, Math.floor(discountPercentage))
                    )}
                  </div>
                </div>
              );
            })}
            <hr className={styles.price_divider} />
            <div className={styles.item_total_price_details}>
              <div>Total Price:</div>
              <div>{currencyFormatter.format(totalPrice)}</div>
            </div>
            <div className={styles.cart_savings}>
              Yay, You will save{" "}
              {currencyFormatter.format(actualTotalPrice - totalPrice)} on this
              order
            </div>
            <button
              className={styles.checkout_btn}
              onClick={() => token && navigate("/checkout")}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.product_unavailable}>
          Oops, no items found! Add items in cart and start shopping!
        </div>
      )}
    </div>
  );
};

export default CartList;
