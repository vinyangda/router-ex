import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log("query??", query.get("q"));
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default ProductPage;
