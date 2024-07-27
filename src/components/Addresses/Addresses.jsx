import React, { useState } from "react";
import { FaPlusSquare } from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
import styles from "./Addresses.module.css";

const Addresses = () => {
  const {
    cartState: { addressList },
  } = useCart();
  const [openAddressForm, setOpenAddressForm] = useState(false);
  const [isEditOn, setIsEditOn] = useState(false);

  console.log("addressList", addressList);

  return (
    <div className={styles.address_wrapper}>
      {openAddressForm ? (
        <AddressForm
          openAddressForm={openAddressForm}
          setOpenAddressForm={setOpenAddressForm}
        />
      ) : (
        <div
          variant="primary"
          // onClick={handleShow}
          className={styles.address_add_btn}
          onClick={() => setOpenAddressForm(true)}>
          <FaPlusSquare className={styles.address_add_icon} />
          Add new address
        </div>
      )}
      {addressList.length > 0 ? (
        addressList.map((item) => {
          return isEditOn ? (
            <AddressForm
              addressData={item}
              key={item._id}
              isEditOn={isEditOn}
              setIsEditOn={setIsEditOn}
            />
          ) : (
            <AddressCard addressData={item} setIsEditOn={setIsEditOn} />
          );
        })
      ) : (
        <div>No addresses found! Please add address</div>
      )}
    </div>
  );
};

export default Addresses;
