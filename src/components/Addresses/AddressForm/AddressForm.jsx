import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { faker } from "@faker-js/faker";

import { useCart } from "../../../context/CartContext";
import { cartActionTypes } from "../../../utils/constant";
import { generateRandomAddress } from "../../../utils/utils";
import { statesList } from "../../../utils/constant";
import styles from "./AddressForm.module.css";

const AddressForm = (props) => {
  const {
    openAddressForm,
    setOpenAddressForm,
    isEditOn,
    setIsEditOn,
    addressData,
  } = props;
  const emptyAddressObj = {
    address: "",
    alternatemobile: "",
    city: "",
    _id: "",
    mobile: "",
    name: "",
    pincode: "",
    state: "",
  };
  const [addressField, setAddressField] = useState(
    addressData ? addressData : emptyAddressObj
  );
  const {
    cartState: { addressList },
    cartDispatch,
  } = useCart();
  const { ADD_ADDRESS, UPDATE_ADDRESS } = cartActionTypes;

  useEffect(() => {
    console.log("addressList", addressList);
  }, [addressList]);

  const handleAddressFieldChange = (e) => {
    const { name, value } = e.target;
    setAddressField({ ...addressField, [name]: value });
  };

  const handleClose = () => {
    openAddressForm && setOpenAddressForm(false);
    isEditOn && setIsEditOn(false);
  };

  const handleRandomAddress = () => {
    const completeAddress = generateRandomAddress();
    setAddressField({
      ...completeAddress,
      _id: faker.database.mongodbObjectId(),
    });
  };

  const handleSubmitAddress = (e) => {
    console.log("update address", addressField);
    e.preventDefault();

    if (isEditOn) {
      cartDispatch({
        type: UPDATE_ADDRESS,
        payload: addressField,
      });
      setIsEditOn(false);
    }

    if (openAddressForm) {
      cartDispatch({
        type: ADD_ADDRESS,
        payload: addressField,
      });
      setOpenAddressForm(false);
    }
  };

  return (
    <Container className={styles.address_input_wrapper} fluid>
      <Form onSubmit={handleSubmitAddress}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="name">
              <Form.Control
                type="text"
                name="name"
                value={addressField?.name}
                placeholder="Name"
                required
                autoFocus
                onChange={handleAddressFieldChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="mobile">
              <Form.Control
                type="text"
                name="mobile"
                placeholder="Mobile no"
                value={addressField?.mobile}
                required
                autoFocus
                onChange={handleAddressFieldChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Form.Group className="mb-3" controlId="altername mobile">
              <Form.Control
                type="text"
                name="alternatemobile"
                placeholder="Alternate mobile (optional)"
                value={addressField?.alternatemobile}
                autoFocus
                onChange={handleAddressFieldChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="city">
              <Form.Control
                type="text"
                name="city"
                placeholder="City"
                value={addressField?.city}
                required
                autoFocus
                onChange={handleAddressFieldChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="state">
              <Form.Select
                aria-label="select state"
                name="state"
                value={addressField?.state}
                onChange={handleAddressFieldChange}>
                <option>State</option>
                {statesList.map((item) => {
                  return (
                    <option value={item} key={item} required>
                      {item}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="postalCode">
              <Form.Control
                type="number"
                name="pincode"
                required
                placeholder="Postal Code"
                value={addressField?.pincode}
                autoFocus
                onChange={handleAddressFieldChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="address">
              <Form.Control
                className={styles.address_textarea}
                as="textarea"
                name="address"
                placeholder="House no, road , colony"
                value={addressField?.address}
                required
                autoFocus
                onChange={handleAddressFieldChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <hr />
        <Button variant="primary" type="submit" className={styles.modal_btn}>
          Add
        </Button>
        <Button
          variant="secondary"
          onClick={() => setAddressField(emptyAddressObj)}
          className={styles.modal_btn}>
          Reset
        </Button>
        <Button
          variant="warning"
          onClick={handleRandomAddress}
          className={styles.modal_btn}>
          Random Data
        </Button>
        <Button
          variant="danger"
          onClick={handleClose}
          className={styles.modal_btn}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default AddressForm;
