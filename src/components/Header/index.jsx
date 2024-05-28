import React from "react";

export default (props) => (
  <div className="py-10 bg-gray-300">
    <div className="container mx-auto flex justify-center">
      <div className="w-10/12 flex justify-between">
        <h4 className="text-black text-2xl">Open Job Listing</h4>
        <button
          onClick={props.openNewJobModal}
          className=" bg-blue-900 text-yellow-600 py-2 px-4 rounded shadow"
        >
          Post a job
        </button>
      </div>
    </div>
  </div>
);

