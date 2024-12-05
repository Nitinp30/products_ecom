"use client";
import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import ProductList from "../Products/ProductsList";
import withAuth from "../hoc/withAuth";

function Dashboard() {
  const [products, setProducts] = useState<any[]>([]); 
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data); 
        setFilteredProducts(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header setFilteredProducts={setFilteredProducts} />
      <ProductList products={filteredProducts} />
    </>
  );
}

export default withAuth(Dashboard);
