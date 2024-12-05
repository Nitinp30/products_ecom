"use client";
import React from "react";
import useFetch from "@/app/hook/usefetch";
import ProductList from "./ProductsList";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

const ProductsPage: React.FC = () => {
  const { data, loading, error } = useFetch<Product[]>(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No products available</div>;
  }

  return (
    <>
      {/* <Header /> */}
      <div className="container mx-auto p-4">
        <ProductList products={data} />
      </div>
    </>
  );
};

export default ProductsPage;

