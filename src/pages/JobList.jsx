import React, { useState, useEffect } from "react";
import 'tailwindcss/tailwind.css';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
//import JobCards from "../components/Job/JobCards";
import NewjobModal from "../components/Job/NewjobModal";
import jobData from "../dummyData";

export default () => {
  const [newJobModal, setNewJobModal] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="font-poppins bg-gray-300">
      <Header openNewJobModal={() => setNewJobModal(true)} />
      {newJobModal && <NewjobModal closeModal={() => setNewJobModal(false)} newJobModal={newJobModal} />}
      
      <div className="flex justify-center">
        <div className="w-10/12">
          <SearchBar />
          {jobData.map((job) => (
            <div key={job.id} className="bg-gray-100 rounded-lg p-4 mb-4">
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p className="text-black">{job.companyName}</p>
              <p className="text-black">{job.type} | {job.location}</p>
              <a href={job.link} className="text-blue-600 hover:underline">More Details</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};