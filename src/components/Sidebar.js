 import React from "react";
 import {Link} from "react-router-dom";
 import { BiNotification,BiHome} from "react-icons/bi";
 import { FaBell,FaPen,FaSearch,FaUserCircle,FaCog,FaInfoCircle,FaList,FaQuestionCircle} from "react-icons/fa";

 function Sidebar(){
    return(
        <>
      <div className="h-screen w-70 bg-gray-200 flex-column gap-2.3  ">
        <div className="flex font-bold text-[25px] p-10 text-center items-center  text-blue-950">
            <h2>CONY</h2>
        </div>
        <div className="flex-direction-colum  rounded-xl text-blue-950 items-center ml-3 text-lg">
            <a href="#" className="flex gap-3 mt-4 mb-4 rounded-[4px] hover:bg-gray-400 text-white-500 ">
                <BiHome/> Home
            </a>
            <a href="#" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaUserCircle/> Profile
            </a>
            <a href="#" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaPen/> Activity      
            </a>
            <a href="#" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaBell/> Notification      
            </a>
            <a href="#" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaList/>Jobs     
            </a>
            <a href="#" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaCog/>Settings     
            </a>
             <a href="#" className="flex gap-3 hover:bg-gray-400 mt-4 mb-4 rounded-[4px]">
                <FaQuestionCircle/>Help    
            </a>
        </div>
        <div className="flex justify-center mt-8">
            <Link to="/"><button className="text-orange-500  bg-blue-950 px-5 py-2 rounded-xl font-bold">Log out</button></Link>
        </div>
        
      </div> 
      </> 
    );
 }
 export default Sidebar;