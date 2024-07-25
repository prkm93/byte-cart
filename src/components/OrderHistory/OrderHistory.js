import React from "react";
import { useCart } from "../../context/CartContext";
import styles from "./OrderHistory.module.css";

const OrderHistory = () => {
  const {
    cartState: { orderedList },
  } = useCart();

  console.log("orderedList", orderedList);

  return (
    <div>
      {orderedList?.map((order) => {
        const {
          order: { address, cart, amount, date, id },
        } = order;
        return (
          <div key={id} className={styles.order_card}>
            <div>payment_id: {id}</div>
            <div>Total Amount: {amount}</div>
            <div>
              Date:{" "}
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
                timeStyle: "medium",
                timeZone: "Asia/Kolkata",
              }).format(date)}
            </div>
            <div>Order will be delivered in 5-7 days</div>
            <div className={styles.order_product_details}>
              {cart.map((item) => {
                const { _id, title, thumbnail, qty, price } = item;
                return (
                  <div key={_id}>
                    <div>{title}</div>
                    <div>
                      <img src={thumbnail} alt={title} />
                    </div>
                    <div>{qty}</div>
                    <div>{price}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderHistory;
