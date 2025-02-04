import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl p-8 rounded-2xl w-full max-w-md border border-gray-300">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Welcome Back!
        </h1>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Link to={"/profile"}>
            <button className="w-full py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition duration-300">
                Login
            </button>
          </Link>
        </form>
        <p className="mt-4 text-gray-600 text-center">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
