import React  from "react";


const JobCard = ({ job}) => {
    
    
    return (

        <div className=" flex flex-flow items-center justify-center  m-4 w-[800px] h-[250px] mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden">
               
               <div className = "flex h-[200px] w-[200px]  items-center">
                {job.image} 
                </div> 
                <h2 className="text-center font-bold text-xl text-black mb-20">{job.title}</h2>
                <div className="mr-10 mt-20">
                <button className="bg-blue-950 hover:bg-blue-900 text-orange-500 font-bold rounded-xl py-2 px-5">Apply</button>
                </div>
                </div>
    )
      
}

export default JobCard;