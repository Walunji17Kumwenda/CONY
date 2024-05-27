import React from "react";
import 'tailwindcss/tailwind.css';
export default (props) => {
  return (
    <div className="p-4 mt-[-20px] mb-8 bg-gray-100 flex shadow-sm rounded-lg">
      <select
        className="flex-1 h-12 m-2 p-2 border rounded"
        defaultValue="Full time"
      >
        <option value="Full time" className="hover:bg-blue-900">Full time</option>
        <option value="Part time">Part time</option>
        <option value="Contract">Contract</option>
      </select>
      <select
        className="flex-1 h-11 m-2 p-2 border rounded"
        defaultValue="Remote"
      >
        <option value="Remote">Remote</option>
        <option value="In-office">In-office</option>
      </select>
      <button
        className="flex-1 h-12 m-2 p-2 bg-blue-900 text-yellow-600 rounded shadow hover:bg-blue-900"
        
      >
        Search
      </button>
    </div>
  );
};