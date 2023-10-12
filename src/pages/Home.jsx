import React from "react";
import Products from "../components/Products/Products";
import Filter from "../components/Filter/Filter";

const Home = () => {
  return (
    <div>
      <Filter />
      <Products />
    </div>
  );
};

export default Home;
