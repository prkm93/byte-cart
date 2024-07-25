import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  const userDetails = JSON.parse(localStorage.getItem("userInfo"))?.user;
  const { email, firstName, lastName, mobileNo } = userDetails;

  return (
    <div className={styles.profile_info_wrapper}>
      <div className={styles.profile_detail}>
        <span className={styles.profile_detail_label}>Name</span> : {firstName}{" "}
        {lastName}
      </div>
      <div className={styles.profile_detail}>
        <span className={styles.profile_detail_label}>Email</span>: {email}
      </div>
      <div className={styles.profile_detail}>
        <span className={styles.profile_detail_label}>Mobile</span>: {mobileNo}
      </div>
      <button className={styles.profile_logout_btn}>Logout</button>
    </div>
  );
};

export default ProfileInfo;
