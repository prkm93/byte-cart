import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import styles from "./Login.module.css";

const Login = () => {
  const testCredentialList = [
    {
      email: "pradeep.kumar@gmail.com",
      password: "PradeepM",
    },
    {
      email: "godrej.wadia@gmail.com",
      password: "GodrejW",
    },
    {
      email: "raj.mallik@yahoo.com",
      password: "RajM",
    },
  ];

  document.title = "Login | Retail Store";

  const { onLoginHandler } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const testCredentialSet = testCredentialList[Math.floor(Math.random() * 3)];

  const handleLogin = (e) => {
    e.preventDefault();
    onLoginHandler(email, password);
  };

  const fillTestCredentials = (e) => {
    const { email, password } = testCredentialSet;
    setEmail(email);
    setPassword(password);
  };

  return (
    <div className={styles.login_page}>
      <div className={styles.form_container}>
        <h3 className={styles.form_header}>Sign In</h3>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.input_wrapper}>
            <label className={styles.input_label} htmlFor="emailAddress">
              Email Address
            </label>
            <input
              className={styles.input_box}
              type="email"
              id="emailAddress"
              required
              value={email}
              placeholder="john.doe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
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
              required
              value={password}
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className={styles.btn_login}>
            Login
          </button>
          <button
            type="submit"
            className={styles.btn_login}
            onClick={fillTestCredentials}>
            SignIn with Test Credentials
          </button>
          <Link className={styles.account_link} to={"/signup"}>
            Create new Account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
