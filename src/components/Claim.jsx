import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Claim = () => {
  const [policies, setPolicies] = useState([]);
  const [selectedPolicy, setSelectedPolicy] = useState("");
  const [claimAmount, setClaimAmount] = useState("");
  const [description, setDescription] = useState("");
  const [processedAmount, setProcessedAmount] = useState(1000);
  const navigate = useNavigate();

  useEffect(() => {
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
    fetchPolicies();
  }, []);

  useEffect(() => {
    console.log("Updated processedAmount:", processedAmount);
  }, [processedAmount]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      console.log("token ============",token)
    console.log("Im printing this")
     const res = await axios.post(
        "http://localhost:8000/api/claims",
        { policyId: selectedPolicy, claimAmount, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log("res is ===========",res.data.processedAmount)

      console.log("Claim submitted successfully");
      console.log("im setting the amt ");
const amt=res.data.processedAmount
console.log("amt isss ",amt)
      setProcessedAmount(amt);
      
     
      
      navigate("/profile"); // Redirect to profile
    } catch (error) {
      console.error("Error submitting claim:", error.response?.data?.error || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Submit a Claim</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-600 font-medium mb-1">Select Policy</label>
            <select
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={selectedPolicy}
              onChange={(e) => setSelectedPolicy(e.target.value)}
            >
              <option value="">Choose Policy</option>
              {policies.map((policy) => (
                <option key={policy._id} value={policy._id}>
                  {policy.type} - {policy.coverageAmount}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Claim Amount</label>
            <input
              type="number"
              placeholder="Enter claim amount"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              value={claimAmount}
              onChange={(e) => setClaimAmount(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-600 font-medium mb-1">Description</label>
            <textarea
              placeholder="Describe your claim details..."
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="3"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Submit Claim
          </button>
        </form>
      </div>
    </div>
  );
};

export default Claim;
