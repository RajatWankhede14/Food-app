import React from "react";
import "../styles/Product.css";

function Product({ product }) {
  return (
    <div className="product">
      <img src={product.strMealThumb} alt={product.strMeal} />
      <h2>{product.strMeal}</h2>
    </div>
  );
}

export default Product;
