import React from "react";
import { MdDiscount } from "react-icons/md";

import { useCart } from "../../context/CartContext";
import { discountedPrice, currencyFormatter } from "../../utils/utils";
import styles from "./Checkout.module.css";
import Address from "./Address/Address";

const Checkout = () => {
  const {
    cartState: { cartItemList },
  } = useCart();
  const coupon_discount = 0;

  const totalQty = cartItemList.reduce((total, item) => total + item.qty, 0);
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

  return (
    <div className={styles.checkout_container}>
      <h3 className={styles.checkout_label}>Checkout</h3>
      <div className={styles.checkout_details}>
        <div>
          <Address />
        </div>
        <div className={styles.checkout_price_details}>
          <div>
            <div className={styles.checkout_order_detail_header}>
              Order Details
            </div>
            <hr />
            <div className={styles.checkout_order_item_detail_header}>
              <div>Item</div>
              <div>Qty</div>
            </div>
            {cartItemList.map((item) => {
              return (
                <div
                  className={styles.checkout_order_item_detail}
                  key={item._id}>
                  <div>{item.title}</div>
                  <div>{item.qty}</div>
                </div>
              );
            })}
            <hr />
          </div>
          <div className={styles.checkout_price_detail_header}>
            Price Details
          </div>
          <hr />
          <div className={styles.checkout_coupon_section}>
            <div className={styles.checkout_coupon_apply}>
              <MdDiscount /> <span>Have a Coupon ? </span>
            </div>
            <button className={styles.checkout_coupon_btn}>Apply</button>
          </div>
          <div className={styles.checkout_display}>
            <div>Price ({totalQty} Items)</div>
            <div>{currencyFormatter.format(actualTotalPrice)}</div>
          </div>
          <div className={styles.checkout_display}>
            <div>Discount</div>
            <div>
              -{currencyFormatter.format(actualTotalPrice - totalPrice)}
            </div>
          </div>
          <div className={styles.checkout_display}>
            <div>Delivery Charges</div>
            <div>FREE</div>
          </div>
          <div className={styles.checkout_display}>
            <div>Coupon Discount</div>
            <div>{currencyFormatter.format(coupon_discount)}</div>
          </div>
          <div className={styles.checkout_display}>
            <div>NEW_USER</div>
            <div>X</div>
          </div>
          <hr />
          <div className={styles.checkout_display}>
            <div>Total Amount</div>
            <div>{currencyFormatter.format(totalPrice - coupon_discount)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
