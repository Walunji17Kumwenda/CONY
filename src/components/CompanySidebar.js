import React from "react";
import { FaBell,FaUserCircle,FaCog,FaList,FaArrowLeft} from "react-icons/fa";
import { NavLink } from "react-router-dom";

function CompanySidebar(){
   return(
       <>
     <div className="h-screen w-[200px] bg-gray-200 flex-column gap-2.3  ">
       <div className="flex font-bold text-[25px] p-10 text-center items-center  text-blue-950">
           <h2>CONY</h2>
       </div>
       <div className="flex-direction-colum  rounded-xl text-blue-950 items-center ml-3 text-lg">
           <a href="/" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
               <FaUserCircle/> Profile
           </a>
           <NavLink to="/companynotifications"className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
               <FaBell/> Notification      
           </NavLink>
           <NavLink to="/jobpost" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
               <FaList/>Create job post     
           </NavLink>
           <NavLink to="/settings" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
               <FaCog/>Settings     
           </NavLink>
       </div>
       <div className="flex justify-center ">
       <NavLink to="/login">  <button className="flex flex-flow gap-5 text-orange-500 absolute bottom-0 mb-5 bg-blue-950 px-7 py-2 rounded-xl font-bold"><FaArrowLeft className="mt-1"/>Log out</button></NavLink>
       </div>
       
     </div> 
     </> 
   );
}
export default CompanySidebar;