"use client";
import React, { useState } from "react";
import ProductCard from "./ProductsCard";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;
  const currentProducts = products.slice(firstIndex, lastIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <ul className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <li key={number}>
                <button
                  onClick={() => handlePageChange(number)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === number
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-black"
                  }`}
                >
                  {number}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;


