import React from "react";
import { useCart } from "../../context/CartContext";
import { currencyFormatter } from "../../utils/utils";
import styles from "./OrderHistory.module.css";

const OrderHistory = () => {
  const {
    cartState: { orderedList },
  } = useCart();

  console.log("orderedList", orderedList);

  return (
    <div>
      {orderedList.length > 0 ? (
        orderedList?.map((order) => {
          const {
            order: {
              address: { address, city, mobile, pincode, state },
              cart,
              amount,
              date,
              id,
            },
          } = order;
          return (
            <div key={id} className={styles.order_card}>
              <div className={styles.order_detail_row}>
                <div className={styles.order_label}>Payment Id:</div>
                <div className={styles.order_detail}>{id}</div>
              </div>
              <div className={styles.order_detail_row}>
                <div className={styles.order_label}>Total amount:</div>
                <div className={styles.order_detail}>
                  {currencyFormatter.format(amount)}
                </div>
              </div>
              <div className={styles.order_detail_row}>
                <div className={styles.order_label}>Date:</div>
                <div className={styles.order_detail}>
                  {new Intl.DateTimeFormat("en-US", {
                    dateStyle: "full",
                    timeStyle: "medium",
                    timeZone: "Asia/Kolkata",
                  }).format(date)}
                </div>
              </div>
              <div className={styles.order_detail_row}>
                <div className={styles.order_label}>Delivery Address:</div>
                <div className={styles.order_detail}>
                  {address}, {city}, {state}, {pincode}
                </div>
              </div>
              <div className={styles.order_detail_row}>
                <div className={styles.order_label}>Contact No:</div>
                <div className={styles.order_detail}>{mobile}</div>
              </div>
              <div className={styles.order_detail_delivery}>
                Your order will be delivered in 5-7 days
              </div>
              <div className={styles.order_product_details}>
                {cart.map((item) => {
                  const { _id, title, thumbnail, qty, price } = item;
                  return (
                    <div key={_id} className={styles.order_cart_detail}>
                      <div className={styles.order_cart_img_wrapper}>
                        <img
                          className={styles.order_cart_img}
                          src={thumbnail}
                          alt={title}
                        />
                      </div>
                      <div className={styles.order_cart_description}>
                        <div>{title}</div>
                        <div>{qty}</div>
                        <div>{price}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.no_order_msg}>No orders to show!</div>
      )}
    </div>
  );
};

export default OrderHistory;
