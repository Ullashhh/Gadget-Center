// import React from 'react';
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product }) => {
  console.log(product);
  const {
    id,
    brand,
    category,
    price,
    title,
    thumbnail
  } = product;

  return (
    <div className="product-section rounded-md border p-3">
      <img
        className="rounded-md h-[150px] w-full"
        src={thumbnail}
        alt={title}
      />
      <h1>{title.length>32 ? title.slice(0,32).concat('...') : title}</h1>
      <p>Category: {category}</p>
      <p>Brand: {brand}</p>
      <p>Price: ${price}</p>
      <div className="flex items-center justify-around mt-5">
        <button className="py-1 px-2 font-semibold rounded-sm mr-3">
          Add To Cart
        </button>
        <Link to={`/details/${id}`}>
          <button className="py-1 px-2 font-semibold rounded-sm mr-3">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
