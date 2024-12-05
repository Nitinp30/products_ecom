"use client";
import React, { useState, useEffect } from "react";
import LoginSignUpModal from "../Login/LoginSignupModal";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface HeaderProps {
  setFilteredProducts: React.Dispatch<React.SetStateAction<any[]>>; 
}

const Header: React.FC<HeaderProps> = ({ setFilteredProducts }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"login" | "signup" | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cartQuantity, setCartQuantity] = useState<number>(0); 

  const handleModalToggle = (type: "login" | "signup") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    if (token) {
      setIsLoggedIn(true);
    }

    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartQuantity(cartItems.length); 
  }, []);

  const handleSearchChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredProducts([]); 
      return;
    }

    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();

      const filtered = data.filter((product: any) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredProducts(filtered); 
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold flex-1"></div>

        {/* Right side items (Search, Cart, Login/Signup) */}
        <div className="flex items-center space-x-4 justify-end w-full">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => handleModalToggle("login")}
                className="px-6 py-2 bg-[#FFBF2E] text-gray-900 rounded-md mx-2 hover:bg-yellow-500"
              >
                Login
              </button>
              <button
                onClick={() => handleModalToggle("signup")}
                className="px-6 py-2 bg-[#FFBF2E] text-gray-900 rounded-md mx-2 hover:bg-yellow-500"
              >
                Signup
              </button>
            </>
          ) : (
            <>
              {/* Search Input Container */}
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="px-4 py-2 w-64 rounded-md text-gray-800"
                />
                <FaSearch className="absolute top-2 right-3 text-gray-600" />
              </div>

              {/* Cart Icon with Quantity Badge */}
              <div 
                className="relative text-white hover:text-gray-300 cursor-pointer" 
                onClick={() => router.push("/cart")}
              >
                <FaShoppingCart size={24} />
                {cartQuantity > 0 && (
                  <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center">
                    {cartQuantity}
                  </span>
                )}
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="px-6 py-2 bg-[#FFBF2E] text-gray-900 rounded-md mx-2 hover:bg-yellow-500"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Modal Component */}
      <LoginSignUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalType={modalType}
      />
    </header>
  );
};

export default Header;


