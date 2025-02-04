import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 rounded-r-2xl">
        <div className="flex flex-col items-center space-y-4">
          {/* Avatar */}
          <img
            src="./avatar.png"
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-gray-300"
          />
          <h2 className="text-lg font-semibold text-gray-800">Abhishek kumar</h2>

          {/* Sidebar Buttons */}
          <div className="w-full space-y-3">
            <Link to={"/policy"}>
                <button className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition mb-15 mt-10">
                Your Policies
                </button>
            </Link>
            
            <Link to={"/claim"}>
                <button className="w-full py-2 px-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition">
                Your Claims
                </button>
            </Link>

          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-gray-700">
          Ooops! You don’t have any policies
        </h2>
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:scale-105 transition">
            Explore Now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
