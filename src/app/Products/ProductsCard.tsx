"use client";
import React from "react";
import Link from "next/link";

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    description: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = () => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
    currentCart.push(product);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    alert("Product added to cart!");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-4 flex flex-col justify-between border border-gray-200">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <p className="text-md text-gray-800 mt-3">{product.title}</p>
      <p className="text-xl font-bold text-gray-900 mt-2">${product.price}</p>

      <div className="flex items-center justify-between mt-4">
        <button
          onClick={handleAddToCart}
          className="py-2 px-4 bg-yellow-500 text-white rounded-md hover:bg-orange-600 transition duration-300 text-sm"
        >
          Add to Cart
        </button>

        <div className="flex items-center space-x-2">
          <button className="text-sm text-orange-500 hover:text-orange-600">
            <i className="fas fa-heart"></i>
          </button>
        </div>

        {/* Link to ProductPage with the product data */}
        <Link
          href={{
            pathname: `/product/${product.id}`,
            query: {
              id: product.id,
            }
          }}
        >
          <div className="flex items-center space-x-2">
          <button className="text-sm text-orange-500 hover:text-orange-600">
            View Details
          </button>
           </div>
          
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;





