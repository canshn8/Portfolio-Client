import React from "react";

function Filter() {
  return (
    <div className="p-4 sticky top-10 bg-gray-800 text-white shadow-lg rounded-lg w-full md:max-w-lg mx-auto">
      <div className="p-4 rounded-lg">
        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b pb-2 mb-4">Filter & Sort</h3>
          <div className="mt-2">
            <label className="block text-sm"></label>
            <select className="w-full p-2 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option hidden></option>
              <option>ASC</option>
              <option>DESC</option>
            </select>
          </div>
          <div className="mt-4">
            <label className="block text-sm"></label>
            <select className="w-full p-2 mt-1 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option hidden></option>
              <option>Most Recent</option>
              <option>Most View</option>
            </select>
          </div>
          <button className="w-full mt-4 p-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition duration-300">
            Search
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold border-b pb-2 mb-4"></h3>
          <button className="w-full mt-4 p-2 bg-red-600 rounded text-white hover:bg-red-700 transition duration-300">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
