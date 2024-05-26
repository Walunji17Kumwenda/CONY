//import React from "react";

import React  from "react";
import {FaArrowLeft} from "react-icons/fa";

function Qualification() {

    return(
    <div className="h-screen w-full flex flex-flow items-center justify-center">
     <div className="flex flex-flow items-center justify-center rounded-xl h-[500px] w-[400px] bg-gray-200">
        <form>
          <div className="flex flex-flow gap-20">
          <FaArrowLeft className=" h-[20px] w-[20px] mt-3"/>
          <h1 className="mb-5 text-center font-bold text-[25px]">Apply</h1>
          </div>
          <div className="flex flex-col">
            <input type="text area" placeholder="qualification details" className="h-[150px] w-[300px] m-0 p-2 outline-none border-2 rounded-xl border-gray-200"/>
            <input type="file" className="mt-4"/>
          </div>
          <div className="mt-5 flex flex-flow items-center justify-center">
            <input type="text" placeholder="skills" className="outline-none p-2 w-[300px] rounded-xl border-2 border-gray-300"/>
          </div>
          <div className="mt-5 flex flex-flow items-center justify-center"> 
            <input type="number" placeholder="years of experience" className="outline-none p-2 w-[300px] rounded-xl border-2 border-gray-300 "/>
          </div>
          <div className="mt-5 flex flex-flow items-center justify-center ">
            <button type="submit" className="text-orange-500 font-bold rounded-xl bg-blue-950 py-2 px-8">Submit</button>
          </div>

        </form>
       </div>
      </div>
    
    );
}
export default Qualification;