import React from "react";
import Sidebar from "./Sidebar";
import { FaBell,FaUserCircle } from "react-icons/fa";


function Homepage(){
    return(
        <div className="flex">
        <Sidebar/>
        <div className="w-full bg-[#ffffff]">
            <div className="flex w-full bg-[#ffffff]">
                    <div className="flex h-2.3 mt-8 ml-4  w-full justify-between">
                        <div className=" items-center ">
                            <input type="search" placeholder="search job here" className="py-2 px-10 bg-gray-100 outline-none rounded-xl"/>
                        </div>
                        <div className="flex gap-4">
                            <FaBell/>
                            <FaUserCircle/>
                        </div>
                    </div>
            </div>
            <div className="mt-8 gap-4 flex items-center">
                <div className="ml-3 mt-1 rounded-xl h-screen w-full border-2 bg-gray-100 ">
                    <h3 className="mt-3 text-center text-blue-950 font-semibold">Available jobs</h3>
                    
                </div>
    
            </div>
       </div>
       </div>
    );
}
export default Homepage;