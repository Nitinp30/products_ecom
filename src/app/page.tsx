"use client"

import { SetStateAction } from "react";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
      <Header setFilteredProducts={function (value: SetStateAction<any[]>): void {
        throw new Error("Function not implemented.");
      } } />
      <section
        className="relative bg-cover bg-center h-[90vh] flex items-center justify-center text-center text-black"
        style={{ backgroundImage: "url('/Banner.jpg')" }}
      >
        <div className="bg bg-opacity-50 p-6 md:p-10 rounded-md">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-base md:text-lg">
            Explore our amazing features and discover what we offer.
          </p>
        </div>
      </section>
    </>
  );
}

