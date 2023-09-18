import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPassword("");
    setUsername("");

    try {
      await axios.post("http://localhost:5000/auth/register", {
        username,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-100 items-center flex justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="Username" className="block">
              Username
            </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="Password" className="block">
              Password
            </label>
            <input
              type="password"
              className="w-full border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          >
            Register
          </button>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:shadow-outline-green active:bg-green-700 ml-2"
          >
            <Link to="/">Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
