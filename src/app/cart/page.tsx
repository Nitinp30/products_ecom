"use client";
import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from 'react-icons/fa'; 
import Header from '../components/Header/Header';
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setProducts(savedCart); 
  }, []);

  const removeFromCart = (index: number) => {
    const updatedCart = products.filter((_, i) => i !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };

  const tp = products.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      <Header setFilteredProducts={() => {}} />
      <div className="p-5 font-sans">
        <h1 className="text-center text-3xl mb-6">Your Cart</h1>

        {/* Cart items container */}
        <div className="space-y-5">
          {products.length > 0 ? (
            products.map((item, index) => (
              <div key={index} className="flex items-center border border-gray-300 p-4 rounded-md w-full md:w-3/4 mx-auto">
                {/* Product Image */}
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-24 h-24 object-cover mr-4 sm:w-28 md:w-32 lg:w-36" 
                />
                
                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-600">Price: ${item.price.toFixed(2)}</p>

                  {/* Quantity Display */}
                  <div className="flex items-center gap-3 mt-2">
                    <span>Quantity: 1 {item.quantity}</span>
                  </div>
                </div>

                {/* Remove Product Button */}
                <div className="ml-1">
                  <button 
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 mt-2">
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-xl text-gray-600">Your cart is empty</p>
          )}
        </div>

        {/* Cart Summary */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-semibold">Total Price: ${tp.toFixed(2)}</h2>
          <div className="mt-4 space-x-4">
            <button 
              onClick={() => router.push("/Dashboard")}
              className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

