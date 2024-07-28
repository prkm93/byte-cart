import { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlineLocationCity } from "react-icons/md";
import { FaLocationPin } from "react-icons/fa6";

import AddressForm from "../AddressForm";
import { useCart } from "../../../context/CartContext";
import { cartActionTypes } from "../../../utils/constant";
import styles from "./AddressCard.module.css";

const AddressCard = ({ addressData }) => {
  const { cartDispatch } = useCart();
  const [isEditOn, setIsEditOn] = useState(false);
  const { address, alternatemobile, city, _id, mobile, name, pincode, state } =
    addressData;
  const { DELETE_ADDRESS } = cartActionTypes;

  const handleDeleteAddress = (id) => {
    cartDispatch({
      type: DELETE_ADDRESS,
      payload: id,
    });
    setIsEditOn(false);
  };

  return isEditOn ? (
    <AddressForm
      isEditOn={isEditOn}
      setIsEditOn={setIsEditOn}
      addressData={addressData}
    />
  ) : (
    <div className={styles.address_card} key={_id}>
      <div className={styles.address_person_name}>
        <span className={styles.address_person_icon}>
          <IoMdPerson />
        </span>
        {name}
      </div>
      <div className={styles.address_phone}>
        <FaPhoneAlt />
        <div>{mobile}</div>
        <div>
          {alternatemobile}
          {"  "}(alternate)
        </div>
      </div>
      <div className={styles.address_phone}>
        <FaLocationCrosshairs />
        {address}
      </div>
      <div className={styles.address_phone}>
        <FaLocationPin />
        <div>{pincode}</div>
      </div>
      <div className={styles.address_ciy}>
        <MdOutlineLocationCity />
        <div>
          {city}, {state}
        </div>
      </div>
      <Container>
        <Row>
          <Col>
            <Button
              variant="primary"
              className={styles.address_modify_btn}
              onClick={() => setIsEditOn(true)}>
              Edit
            </Button>
          </Col>
          <Col>
            <Button
              variant="danger"
              className={styles.address_modify_btn}
              onClick={() => handleDeleteAddress(_id)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddressCard;
