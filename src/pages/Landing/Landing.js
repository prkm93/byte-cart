import React from "react";

const Landing = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("/api/products");
      console.log("response. data", await response.json());
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <div>
      {/* <h1>Landing</h1> */}
      {/* <button onClick={fetchData}>Fetch data</button> */}
    </div>
  );
};

export default Landing;
