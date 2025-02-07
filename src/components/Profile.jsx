import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const Profile = () => {
  const [policies, setPolicies] = useState([]);
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/api/auth/login/user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data); // Assuming response contains user info
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchPolicies = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/api/policies", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setPolicies(response.data);
      } catch (error) {
        console.error("Error fetching policies:", error);
      }
    };

    const fetchClaims = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/api/claims", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setClaims(response.data);
      } catch (error) {
        console.error("Error fetching claims:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
    fetchPolicies();
    fetchClaims();
  }, []);

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
          <h2 className="text-lg font-semibold text-gray-800">
          Hello! user
          </h2>

          {/* Sidebar Buttons */}
          <div className="w-full space-y-3">
            <Link to={"/policy"}>
              <button className="w-full mt-15 py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
                New Policy
              </button>
            </Link>

            <Link to={"/claim"}>
              <button className="w-full mt-15 py-2 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition">
                Claim your new policy
              </button>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
        {loading ? (
          <p className="text-gray-600 text-lg">Loading...</p>
        ) : (
          <div className="w-full max-w-4xl">
            {/* Policies Section */}
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Policies</h2>
            {policies.length === 0 ? (
              <div>
                <h2 className="text-xl font-bold text-gray-700">
                  Ooops! You don’t have any policies
                </h2>
                <Link to="/">
                  <button className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white text-lg font-semibold rounded-lg shadow-md hover:scale-105 transition">
                    Explore Now!
                  </button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {policies.map((policy) => (
                  <div
                    key={policy._id}
                    className="bg-white p-6 rounded-lg shadow-md border"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">{policy.type} Policy</h3>
                    <p className="text-gray-600">Coverage Amount: ₹{policy.coverageAmount}</p>
                    <p className="text-gray-500 text-sm">Policy ID: {policy._id}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Claims Section */}
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Claims</h2>
            {claims.length === 0 ? (
              <p className="text-gray-600">No claims found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {claims.map((claim) => (
                  <div
                    key={claim._id}
                    className="bg-white p-6 rounded-lg shadow-md border"
                  >
                    <h3 className="text-xl font-semibold text-gray-800">Claim ID: {claim._id}</h3>
                    <p className="text-gray-600">Policy Type: {claim.policyType}</p>
                    <p className="text-gray-600">Claim Amount: ₹{claim.claimAmount}</p>
                    <p className="text-gray-500">Status: <span className={`font-bold ${claim.status === "approved" ? "text-green-600" : claim.status === "rejected" ? "text-red-600" : "text-yellow-600"}`}>
                      {claim.status}
                    </span></p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
