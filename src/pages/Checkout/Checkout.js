import React, { useState } from "react";
import { MdDiscount } from "react-icons/md";

import Address from "./Address";
import CouponModal from "./Coupon";
import { useCart } from "../../context/CartContext";
import { discountedPrice, currencyFormatter } from "../../utils/utils";
import styles from "./Checkout.module.css";

const Checkout = () => {
  const {
    cartState: { cartItemList, addressList },
    cartDispatch,
  } = useCart();
  const [selectedAddress, setSelectedAddress] = useState(addressList[0]);
  const [show, setShow] = useState(false);
  const [couponOffer, setCouponOffer] = useState({
    value: 0,
    offer: "",
  });

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

  const couponDiscount = (Number(couponOffer.value) / 100) * totalPrice;

  const finalTotalPrice = totalPrice - couponDiscount;

  return (
    <div className={styles.checkout_container}>
      <h3 className={styles.checkout_label}>Checkout</h3>
      <div className={styles.checkout_details}>
        <div>
          <Address
            addressList={addressList}
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            cartDispatch={cartDispatch}
          />
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
            <div className={styles.checkout_coupon}>
              <MdDiscount /> <span>Have a Coupon ? </span>
            </div>
            <button
              className={styles.checkout_coupon_btn}
              onClick={() => setShow(true)}>
              Apply
            </button>
          </div>
          <div>
            <CouponModal
              show={show}
              setShow={setShow}
              couponOffer={couponOffer}
              setCouponOffer={setCouponOffer}
            />
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
            <div>- {currencyFormatter.format(couponDiscount)}</div>
          </div>
          {Boolean(couponOffer.value) && (
            <div className={styles.checkout_display}>
              <div className={styles.checkout_coupon_offer}>
                {couponOffer.offer}
              </div>
              <div
                className={styles.clear_coupon}
                onClick={() => setCouponOffer({ value: "", offer: "" })}>
                X
              </div>
            </div>
          )}
          <div className={styles.cart_savings}>
            Yay, You will save{" "}
            {currencyFormatter.format(
              actualTotalPrice - totalPrice + couponDiscount
            )}{" "}
            on this order
          </div>
          <hr />
          <div className={styles.checkout_display}>
            <div>Total Amount</div>
            <div>{currencyFormatter.format(Math.round(finalTotalPrice))}</div>
          </div>
          <hr />
          <div className={styles.checkout_price_detail_header}>DELIVER TO</div>
          <hr />
          <div className={styles.checkout_address_selected}>
            <h6 className="fw-bold">{selectedAddress.name}</h6>
            <div>{`${selectedAddress.address}, ${selectedAddress.city},  ${selectedAddress.state}, ${selectedAddress.pincode}`}</div>
            <div>
              <b>Mobile:</b> {selectedAddress.mobile}
            </div>
          </div>
          <button className={styles.checkout_order_btn}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
