import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { faker } from "@faker-js/faker";
import { FaPlusSquare } from "react-icons/fa";

import { statesList } from "../../../utils/constant";
import { cartActionTypes } from "../../../utils/constant";
import { generateRandomAddress } from "../../../utils/utils";
import styles from "./Address.module.css";

const Address = ({
  addressList,
  selectedAddress,
  setSelectedAddress,
  cartDispatch,
}) => {
  const formInitialObj = {
    name: "",
    mobile: "",
    pincode: "",
    city: "",
    address: "",
    alternatemobile: "",
    state: "",
  };

  const { UPDATE_ADDRESS } = cartActionTypes;
  const [formData, setformData] = useState(formInitialObj);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setformData(formInitialObj);
  };
  const handleShow = () => setShow(true);

  const handleRandomAddress = () => {
    const completeAddress = generateRandomAddress();
    setformData({ ...completeAddress, _id: faker.database.mongodbObjectId() });
  };

  const handleFormInputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitAddress = (e) => {
    e.preventDefault();
    cartDispatch({
      type: UPDATE_ADDRESS,
      payload: { ...formData, _id: faker.database.mongodbObjectId() },
    });
    setShow(false);
  };

  return (
    <div>
      <h4 className={styles.address_label}>Address details</h4>
      <div>
        <div>
          {addressList.map((item) => {
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
            return (
              <div
                key={_id}
                className={`${styles.address_item} ${
                  _id === selectedAddress._id && styles.address_item_active
                }`}>
                <input
                  type="radio"
                  name="address-radio"
                  id={_id}
                  checked={_id === selectedAddress._id}
                  className={styles.address_radio_input}
                  onChange={() => setSelectedAddress(item)}
                />
                <label className={styles.address_item_label} htmlFor={_id}>
                  <h5 className="fw-bold">{name}</h5>
                  <div>{`${address}, ${city},  ${state}, ${pincode}`}</div>
                  <div>
                    <b>Mobile:</b> {mobile}
                  </div>
                  <div>
                    <b>Alternate mobile:</b> {alternatemobile}
                  </div>
                </label>
              </div>
            );
          })}
        </div>
        <div
          variant="primary"
          onClick={handleShow}
          className={styles.address_add_btn}>
          <FaPlusSquare className={styles.address_add_icon} />
          Add new address
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          className={styles.address_modal}>
          <Modal.Header closeButton>
            <Modal.Title className={styles.address_modal_header}>
              Add Address
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmitAddress}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  required
                  autoFocus
                  onChange={handleFormInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mobile">
                <Form.Control
                  type="text"
                  name="mobile"
                  placeholder="Mobile no"
                  value={formData.mobile}
                  required
                  autoFocus
                  onChange={handleFormInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="altername mobile">
                <Form.Control
                  type="text"
                  name="alternatemobile"
                  placeholder="Alternate mobile (optional)"
                  value={formData.alternatemobile}
                  autoFocus
                  onChange={handleFormInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="city">
                <Form.Control
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  required
                  autoFocus
                  onChange={handleFormInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="state">
                <Form.Select
                  aria-label="select state"
                  name="state"
                  value={formData.state}
                  onChange={handleFormInputChange}>
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
              <Form.Group className="mb-3" controlId="postalCode">
                <Form.Control
                  type="number"
                  name="pincode"
                  required
                  placeholder="Postal Code"
                  value={formData.pincode}
                  autoFocus
                  onChange={handleFormInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="address">
                <Form.Control
                  as="textarea"
                  name="address"
                  placeholder="House no, road , colony"
                  value={formData.address}
                  required
                  autoFocus
                  onChange={handleFormInputChange}
                />
              </Form.Group>
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Add
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => setformData(formInitialObj)}>
                  Reset
                </Button>
                <Button variant="warning" onClick={handleRandomAddress}>
                  Random Data
                </Button>
                <Button variant="danger" onClick={handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default Address;
