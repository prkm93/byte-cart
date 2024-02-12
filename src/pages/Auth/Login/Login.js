import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.form_container}>
      <h2 className={styles.form_header}>Sign In</h2>
      <form className={styles.form}>
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
        <button className={styles.btn_login}>
          SignIn with Test Credentials
        </button>
        <a className={styles.account_link} href="/signup">
          Create new Account
        </a>
      </form>
    </div>
  );
}

export default Login;
