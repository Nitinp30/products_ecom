"use client";
import React, { useState } from "react";

interface SignupProps {
  toggleToLogin: () => void;
}

const Signup: React.FC<SignupProps> = ({ toggleToLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!name || !email || !password) {
      alert("Please fill all fields!");
      return;
    }

    const newUser = { name, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    alert("Signup successful! Redirecting to login...");
    toggleToLogin(); // Switch to login modal
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <form onSubmit={handleSignup} className="space-y-4">
      {/* Name Input */}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        required
      />

      {/* Email Input */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        required
      />

      {/* Password Input */}
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        required
      />

      {/* Confirm Password Input */}
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        required
      />

      {/* Sign Up Button */}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-[#FFBF2E] text-gray-900 rounded-md hover:bg-yellow-500"
      >
        Sign Up
      </button>

    </form>
  );
};

export default Signup;