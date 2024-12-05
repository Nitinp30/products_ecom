"use client";
import React, { useState } from "react";
import Login from "./Login";
import Signup from "../Signup/Signup";

interface LoginSignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  modalType: "login" | "signup" | null;
}

const LoginSignUpModal: React.FC<LoginSignUpModalProps> = ({
  isOpen,
  onClose,
  modalType: initialModalType,
}) => {
  const [modalType, setModalType] = useState<"login" | "signup" | null>(
    initialModalType
  );

  if (!isOpen) return null;

  const toggleModalType = () => {
    setModalType((prev) => (prev === "login" ? "signup" : "login"));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Modal Container */}
      <div className="relative bg-white p-8 rounded-lg w-96 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-700 hover:text-black text-2xl font-bold"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Main Heading */}
        <h1 className="text-center text-3xl font-bold text-black mb-4">
          {modalType === "login" ? "LOGIN" : "SIGNUP"}
        </h1>

        {/* Modal Content */}
        <div className="flex flex-col gap-4">
          {modalType === "login" ? (
            <Login />
          ) : (
            <Signup toggleToLogin={() => setModalType("login")} />
          )}
        </div>

        {/* Toggle Message */}
        <p className="text-center mt-4 text-gray-700">
          {modalType === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={toggleModalType}
                className="text-blue-500 hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={toggleModalType}
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginSignUpModal;