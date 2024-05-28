import React from "react";
import 'tailwindcss/tailwind.css';

export default (props) => {
  const skills = [
    "Javascript",
    "React",
    "Node",
    "HTML",
    "Firebase",
    "MongoDB",
    "SQL",
  ];

  return (
    <div className="bg-gray-300 min-h-screen p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Post Job</h1>
          <button onClick={props.closeModal} className="text-gray-500 hover:text-gray-700">
            &times;
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input type="text" placeholder="Job title*" className="w-full p-2 border rounded" />
          </div>
          <div>
            <select className="w-full p-2 border" defaultValue="Full time">
              <option value="Full time">Full time</option>
              <option value="Part time">Part time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="Company name*" className="w-full p-2 border rounded" />
          </div>
          <div>
            <input type="text" placeholder="Company URL*" className="w-full p-2 border rounded" />
          </div>
          <div>
            <select className="w-full p-2 border rounded" defaultValue="Remote">
              <option value="Remote">Remote</option>
              <option value="In-office">In-office</option>
            </select>
          </div>
          <div>
            <input type="text" placeholder="Job link*" className="w-full p-2 border rounded" />
          </div>
          <div className="col-span-2">
            <textarea placeholder="Job description*" className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <div className="col-span-2">
            <textarea placeholder="Job requirements*" className="w-full p-2 border rounded" rows="2"></textarea>
          </div>
          <div>
            <input type="text" placeholder="Payment Details*" className="w-full p-2 border rounded" />
          </div>
          <div>
            <select className="w-full p-2 border rounded" defaultValue="Monthly">
              <option value="Monthly">Monthly</option>
              <option value="Weekly">Weekly</option>
              <option value="Daily">Daily</option>
            </select>
          </div>
        </div>
        <div className="mt-4">
          <p>Skills</p>
          <div className="flex flex-wrap">
            {skills.map((skill) => (
              <span
                key={skill}
                className="m-1 p-2 text-sm border border-black bg-gray-300 text-yellow-600 rounded cursor-pointer hover:bg-blue-900 hover:text-yellow-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-between items-center text-red-500">
          <p className="text-xs">*Required fields</p>
          <button className="px-4 py-2 bg-blue-900 text-yellow-600 rounded shadow hover:bg-blue-900-dark">
            Post job
          </button>
        </div>
      </div>
    </div>
  );
};