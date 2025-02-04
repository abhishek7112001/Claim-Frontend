import React from 'react'
import { Link } from 'react-router-dom'

const Policy = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
              Select Your Policy
            </h2>
    
            <form className="space-y-4">
           
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Policy Type
                </label>
                <select
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                >
                  <option value="">Select Policy Type</option>
                  <option value="Vehicle">Vehicle Policy</option>
                  <option value="Home">Home Policy</option>
                  <option value="Health">Health Policy</option>
                </select>
              </div>
    
              
              <div>
                <label className="block text-gray-600 font-medium mb-1">
                  Coverage Amount
                </label>
                <input
                  type="number"
                  placeholder="Enter coverage amount"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
    
              <Link to={"/profile"}>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                    Submit
                </button>
              </Link>
            </form>
          </div>
        </div>
      );
}

export default Policy