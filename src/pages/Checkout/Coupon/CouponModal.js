import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./Coupon.module.css";

const CouponModal = ({ show, setShow, setCouponOffer }) => {
  const [coupon, setCoupon] = useState({});
  const [error, setError] = useState("");

  const handleClose = () => {
    setShow(false);
    setError("");
    setCoupon({});
  };

  const selectCouponHandler = (e) => {
    setCoupon({ offer: e.target.value, value: e.target.id });
    if (coupon.offer !== "") {
      setError("");
    }
  };

  const handleApplyCoupon = () => {
    if (!("value" in coupon) && !("offer" in coupon)) {
      setError("Please select any coupon");
    } else {
      setCouponOffer(coupon);
      setShow(false);
      setCoupon({});
      setError("");
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} className={styles.coupon_modal}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.coupon_header}>
            Apply Coupon
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.coupon_offer}>
            <input
              type="radio"
              name="coupon"
              value="NEW_USER"
              id="10"
              onChange={selectCouponHandler}
            />
            <label className={styles.coupon_offer_radio_label} htmlFor="10">
              10% OFF: NEW_USER
            </label>
          </div>
          <div className={styles.coupon_offer}>
            <input
              type="radio"
              name="coupon"
              value="MEGA_SALE"
              id="20"
              onChange={selectCouponHandler}
            />
            <label className={styles.coupon_offer_radio_label} htmlFor="20">
              20% OFF: MEGA_SALE
            </label>
          </div>
          <div className={styles.coupon_offer}>
            <input
              type="radio"
              name="coupon"
              value="BUMPER_DHAMAKA"
              id="40"
              onChange={selectCouponHandler}
            />
            <label className={styles.coupon_offer_radio_label} htmlFor="40">
              40% OFF: BUMPER_DHAMAKA
            </label>
          </div>
          {error.length > 0 && (
            <div className={styles.coupon_error}>{error}</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleApplyCoupon}>
            Apply Coupon
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CouponModal;
