import React from "react";
import {NavLink} from "react-router-dom";
function Content(){
    return(
        <>
        <div className="flex items-center justify-center  mr-3">
            <input type="search" placeholder="Search job here" className="flex outline-none px-20 py-2 border border-gray-300 rounded-xl"/>
        </div>
        <div className="flex mt-8  items-center justify-center text-center  ">
        <div>
            <p className="text-blue-950 font-semibold text-5xl py-4">Your way to a dream job</p>
            <p className="text-blue-950 font-semibold text-1xl">Need a job or interniship?<br/>
               Lets take you there
            </p>
        </div>
       </div>
        <div className="flex mt-8  items-center justify-center">
           <NavLink to="/register"> <button className="px-4 py-3 bg-blue-950 text-orange-500 font-bold rounded-full hover:bg-blue-900">Lets get started</button></NavLink>
        </div>

        <div className="mt-3 p-3 flex justify-center items-center text-center rounded-xl">
            <p className="text-blue-950 font-semibold text-center">The aim of this platform is to support both <br/>
             undergraduates and graduates to find their respective field for<br/> job or interniship in order to pursue their career im different field </p>
        </div>
        <h4 className="flex mt-5  text-2xl font-bold text-center justify-center text-blue-950">Develop your career in</h4>
        <div className="p-3 gap-3 flex items-center">
            
        </div>

        <footer className="">
        <div className="mt-8 flex text-blue-950 justify-center justify-around bg-gray-400">
            <div>
            <h2>&copy;2024 CONY </h2>
            <h2 className="font-bold ">Legal</h2>
                <li className="list-none"><a href="#">Claim</a></li>
                <li className="list-none"><a href="#">Privacy</a></li>
                <li className="list-none"><a href="#">Terms</a></li>
            </div> 
        </div>
        </footer>
        </>
    );
}
export default Content;