import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("products?q=pants");
  };
  console.log();
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">Go to about page</Link>
      <button onClick={goProductPage}>Pants</button>
    </div>
  );
};

export default HomePage;
