 import React from "react";
 import {NavLink} from "react-router-dom";
 
 import { FaBell,FaUserCircle,FaCog,FaList} from "react-icons/fa";
import JobMatchingAlgorithm from "../Algorithm/JobMatchingAlgorithm";

 function Sidebar(){
    return(
        <>
      <div className="h-screen w-70 bg-gray-200 flex-column gap-2.3  ">
        <div className="flex font-bold text-[25px] p-10 text-center items-center  text-blue-950">
            <h2>CONY</h2>
        </div>
        <div className="flex-direction-colum  rounded-xl text-blue-950 items-center ml-3 text-lg">
            <NavLink to = "" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaUserCircle/> Profile
            </NavLink>
           
            <NavLink to ="/notifications" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaBell/> Notification      
            </NavLink>
            <NavLink to ="/jobs" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaList/>  <JobMatchingAlgorithm userRequirements={"im good at python and java"}/>
            </NavLink>
            <NavLink to="/settings" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaCog/>Settings     
            </NavLink>
            
        </div>
        <div className="flex justify-center mt-8">
            <NavLink to="/login"><button className="text-orange-500  bg-blue-950 px-5 py-2 rounded-xl font-bold">Log out</button></NavLink>
        </div>
        
      </div> 
      </> 
    );
 }
 export default Sidebar;