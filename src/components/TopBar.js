import React from "react";
import {NavLink} from "react-router-dom";

function TopBar() {
    return(
        <div className="flex  justify-between  ml-5 mr-5 gap-4 border-b-2 ">
            <h1 className="text-blue-950 text-4xl font-bold">CONY</h1>
            
            <ul className="flex mt-2 gap-8 font-bold text-blue-950  mouse-pointer">
            
            <li><NavLink to = "/about" className="hover:underline hover:decoration-blue-950 hover:decoration-4 transition duration-400 ease-in-out">About</NavLink></li>
            <li><NavLink to="/feedback" className="hover:underline hover:decoration-blue-950 hover:decoration-4 transition duration-400 ease-in-out">Contact Us</NavLink></li>
           </ul>

             <div className="flex gap-5">
                 <NavLink to="/login"><button className="py-1 px-2 bg-blue-950 text-orange-500 font-bold rounded-xl hover:bg-blue-900">Log in</button></NavLink>
            </div>
           
           
         </div>
  );
}
export default TopBar;