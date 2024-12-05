"use client"

import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

import Header from "@/app/components/Header/Header";

interface productType {
  title : string;
  price : string;
  image : string | any;
  description : string;
}

const ProductPage: React.FC = () => {
  const router = useRouter(); 
  const searchParams = useSearchParams();
  const [product,setProduct] = useState<productType>({
    title : "",
    price : "",
    image : null,
    description : ""
  });


 const id = searchParams.get('id') || '';
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct((prev)=>  ({
          ...prev,
          title: data.title,
          price : data.price,
          image: data.image,
          description : data.description
        }))
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <>
      <Header setFilteredProducts={() => {}} />
      <div className="max-w-5xl mx-auto mt-9 p-6 rounded-2xl bg-white">
        {/* Product Info Section */}
        <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center items-center">
              <img
                src={product?.image}
                alt={product?.title}
                className="w-2/3 max-w-sm rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl sm:text-2xl text-black font-bold">{product?.title}</h1>
                <button className="p-2 bg-gray-200 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 12.75l5.25-5.25m0 0l5.25 5.25m-5.25-5.25V21"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-gray-500 mb-4">1 pc</p>

              <div className="flex items-center justify-between bg-gray-100 p-4 rounded-xl">
                <span className="text-lg sm:text-xl font-bold text-gray-900">
                  ₹{product.price}
                </span>
            
              </div>

              <div className="mt-6">
                <h2 className="text-lg sm:text-xl text-black font-bold mb-3">
                  Product details
                </h2>
                <p className="text-gray-600">{product?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

