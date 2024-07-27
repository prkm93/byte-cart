import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import ProfileInfo from "../../components/ProfileInfo";
import Addresses from "../../components/Addresses";
import OrderHistory from "../../components/OrderHistory";
import styles from "./Profile.module.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_tab_container}>
        <div className={styles.profile_tabs}>
          {/* <Navigate to={"/profile/details"}>Profile Details</Navigate>
          <Navigate to={"/profile/addresses"}>Addresses</Navigate>
          <Navigate to={"/profile/orders"}>Order History</Navigate> */}
          <div
            className={`${styles.profile_tab} ${
              activeTab === 0 && styles.active_tab
            }`}
            onClick={() => setActiveTab(0)}>
            Profile Details
          </div>
          <div
            className={`${styles.profile_tab} ${
              activeTab === 1 && styles.active_tab
            }`}
            onClick={() => setActiveTab(1)}>
            Addresses
          </div>
          <div
            className={`${styles.profile_tab} ${
              activeTab === 2 && styles.active_tab
            }`}
            onClick={() => setActiveTab(2)}>
            Order History
          </div>
        </div>
        {/* <ProfileInfo />
      <AddressForm />
      <OrderHistory /> */}

        {activeTab === 0 && <ProfileInfo />}
        {activeTab === 1 && <Addresses />}
        {activeTab === 2 && <OrderHistory />}
        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
