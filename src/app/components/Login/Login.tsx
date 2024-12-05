"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      const { email: savedEmail, password: savedPassword } = JSON.parse(savedUser);

      if (email === savedEmail && password === savedPassword) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        router.push("/Dashboard");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    } else {
      alert("No user found. Please sign up first.");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-black"
        required
      />
      <button
        type="submit"
        className="w-full px-4 py-2 bg-[#FFBF2E] text-gray-900 rounded-md hover:bg-yellow-500"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
