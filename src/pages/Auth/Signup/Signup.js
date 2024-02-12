import React from "react";
import styles from "./Signup.module.css";

function Signup() {
  return (
    <div className={styles.form_container}>
      <h2 className={styles.form_header}>Sign Up</h2>
      <form className={styles.form}>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label} htmlFor="name">
            Full Name
          </label>
          <input
            className={styles.input_box}
            type="input"
            id="name"
            placeholder="xyz@apparelstore.com"
          />
        </div>
        <div className={styles.input_wrapper}>
          <label className={styles.input_label} htmlFor="emailAddress">
            Email Address
          </label>
          <input
            className={styles.input_box}
            type="email"
            id="emailAddress"
            placeholder="xyz@apparelstore.com"
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
            placeholder="********"
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
            placeholder="********"
          />
        </div>
        <button className={styles.btn_signup}>Create new account</button>
        <a className={styles.account_link} href="/login">
          Already have an account
        </a>
      </form>
    </div>
  );
}

export default Signup;
