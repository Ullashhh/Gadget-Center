// import React from 'react';
import {useLoaderData} from 'react-router-dom'

const Details = () => {
    const product = useLoaderData()
    return (
      <div className="mt-10 px-40">
        <h1 className='text-center mb-7'>Details of {product.title}</h1>
        <div className="grid grid-cols-5 gap-5  ">
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={product.title} />
          ))}
        </div>
        <h1>{product.title}</h1>
        <p>Brand: {product.brand}</p>
        <p>Description: {product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating} out of 5.00</p>
        <p>Stock: {product.stock}</p>
      </div>
    );
};

export default Details;