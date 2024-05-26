import React from "react";

const JobCard = (props) => {
  const { title, companyName, skills, postedOn, type, location } = props;

  return (
    <div className="p-4 border-2  bg-white cursor-pointer transition duration-300 hover:shadow-lg hover:border-l-4 hover:border-blue-900">
      <div className="flex items-center">
        <div className="flex-1" >
          <h3 className="text-lg text-black">{title}</h3>
          <span className="text-xs bg-blue-500 text-black px-2 py-1 rounded-md inline-block font-semibold">
            {companyName}
          </span>
        </div>
        <div className="flex-1 flex flex-wrap"> 
          {skills.map((skill, index) => (
            <span
              key={index}
              className="m-2 p-2 text-sm rounded-md font-semibold border border-gray-300 text-gray-700 cursor-pointer hover:bg-blue-900 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-end flex-1">
          <span className="text-xs">
            {new Date(postedOn).toLocaleString()} | {type} | {location}
          </span>
          <button className="mt-2 border border-blue-500 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-black">
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;