import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Policy = () => {
  const [policyType, setPolicyType] = useState("");
  const [coverageAmount, setCoverageAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem("token"); // Ensure user is authenticated
      const response = await axios.post(
        "https://stateful-claim-management-system.onrender.com/api/policies",
        { type: policyType, coverageAmount },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      console.log("Policy Created:", response.data);
      navigate("/profile"); // Redirect after success
    } catch (error) {
      console.error("Error creating policy:", error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
          Select Your Policy
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Policy Type</label>
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={policyType}
              onChange={(e) => setPolicyType(e.target.value)}
            >
              <option value="">Select Policy Type</option>
              <option value="vehicle">Vehicle Policy</option>
              <option value="home">Home Policy</option>
              <option value="health">Health Policy</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Coverage Amount</label>
            <input
              type="number"
              placeholder="Enter coverage amount"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={coverageAmount}
              onChange={(e) => setCoverageAmount(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Policy;
