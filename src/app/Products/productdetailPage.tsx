import React from "react";
import Header from "../components/Header/Header";

const ProductPage: React.FC = () => {
  return (
    <>
      <Header setFilteredProducts={function (value: React.SetStateAction<any[]>): void {
        throw new Error("Function not implemented.");
      } }/>
      <div className="max-w-5xl mx-auto mt-20 p-6 rounded-2xl bg-white">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600">
          <ol className="flex space-x-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>/</li>
            <li>
              <a href="/dashboard" className="hover:underline">
                Packaging Material
              </a>
            </li>
            <li>/</li>
            <li className="font-semibold text-gray-800">
              Best Fresh - Cling Film Roll, 1.4 Kg
            </li>
          </ol>
        </nav>

        {/* Product Info Section */}
        <div className="mt-8 bg-gray-50 p-6 rounded-xl shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
            {/* Product Image */}
            <div className="flex justify-center items-center">
              <img
                src="https://assets.hyperpure.com/data/images/products/d0cd4aa197779153c42f09ce236a7711.jpg"
                alt="Product Image"
                className="w-2/3 max-w-sm rounded-lg shadow-lg"
              />
            </div>

            {/* Product Details */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl sm:text-2xl font-bold">
                  Best Fresh - Cling Film Roll, 1.4 Kg
                </h1>
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
                  ₹192
                </span>
                <button className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600">
                  ADD +
                </button>
              </div>

              <div className="mt-6">
                <h2 className="text-lg sm:text-xl font-bold mb-3">
                  Product details
                </h2>
                <p className="text-gray-600">
                  Cling Wrap extends food freshness and prevents freezer burn by
                  keeping moisture in and air out. BPA-free with no
                  plasticizers, it features a built-in slide cutter for clean,
                  consistent tearing, and minimizing waste. Ideal for kitchen
                  use, it’s perfect for storing and reheating leftovers, keeping
                  ingredients fresh in the refrigerator, or freezing bulk foods.
                  It seals any surface from glass to metal perfectly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ExploreMore />
      <Footer /> */}
    </>
  );
};

export default ProductPage;
