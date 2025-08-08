// src/components/Login.js
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      onLogin(userCred.user);
    } catch (err) {
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          className="w-full p-2 border mb-3 rounded"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full p-2 border mb-3 rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
