import React from "react";
import { FaPlusSquare } from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import styles from "./Address.module.css";
import AddressInput from "./AddressInput/AddressInput";

const AddressForm = () => {
  const {
    cartState: { addressList },
  } = useCart();

  return (
    <div className={styles.address_wrapper}>
      <div
        variant="primary"
        // onClick={handleShow}
        className={styles.address_add_btn}>
        <FaPlusSquare className={styles.address_add_icon} />
        Add new address
      </div>
      <div>
        <AddressInput />
      </div>
      {addressList.length > 0 ? (
        addressList.map((item) => {
          const {
            address,
            alternatemobile,
            city,
            _id,
            mobile,
            name,
            pincode,
            state,
          } = item;
          return <div></div>;
        })
      ) : (
        <div>No addresses found! Please add address</div>
      )}
    </div>
  );
};

export default AddressForm;
