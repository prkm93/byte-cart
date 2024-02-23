import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signup.module.css";
import { useAuth } from "../../../context/AuthContext";

const Signup = () => {
  const { signUpHandler } = useAuth();
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [error, setError] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();

    if (userDetails.password !== userDetails.confirm_password) {
      setError(true);
      return;
    }

    signUpHandler(
      userDetails.firstName,
      userDetails.lastName,
      userDetails.email,
      userDetails.password
    );

    setUserDetails({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirm_password: "",
    });
  };

  const handleUserDetails = (e) => {
    const { name, value } = e.target;
    setError(false);

    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <div className={styles.form_container}>
      <h2 className={styles.form_header}>Sign Up</h2>
      <form className={styles.form} onSubmit={handleSignUp}>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label} htmlFor="firstName">
            First Name
          </label>
          <input
            className={styles.input_box}
            type="input"
            id="firstName"
            name="firstName"
            placeholder="John"
            required
            value={userDetails.firstName}
            onChange={handleUserDetails}
          />
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label} htmlFor="lastName">
            Last Name
          </label>
          <input
            className={styles.input_box}
            type="input"
            id="lastName"
            name="lastName"
            placeholder="Doe"
            required
            value={userDetails.lastName}
            onChange={handleUserDetails}
          />
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label} htmlFor="email">
            Email Address
          </label>
          <input
            className={styles.input_box}
            type="email"
            id="email"
            name="email"
            required
            placeholder="john.doe@systemEnterprises.com"
            value={userDetails.email}
            onChange={handleUserDetails}
          />
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input_box}
            type="password"
            id="password"
            name="password"
            required
            placeholder="********"
            value={userDetails.password}
            onChange={handleUserDetails}
          />
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label} htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            className={styles.input_box}
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="********"
            required
            value={userDetails.confirm_password}
            onChange={handleUserDetails}
          />
          {error && (
            <div className={styles.error}>
              password and confirm password should match
            </div>
          )}
        </div>
        <button type="submit" className={styles.btn_signup}>
          Create new account
        </button>
        <Link className={styles.account_link} to={"/login"}>
          Already have an account
        </Link>
      </form>
    </div>
  );
};

export default Signup;
