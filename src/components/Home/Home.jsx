// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import Loading from "../Loading/Loading";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((data) => setProducts(data.data.products));
  }, []);
  return (
    <main className="px-24 mt-10 grid grid-cols-4 gap-5">
      {products.length === 0 ? (
        <Loading></Loading>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))
      )}
    </main>
  );
};

export default Home;
