import React from 'react'
import { NavLink } from 'react-router-dom';

const Notificationspage = () => {
  return(
        <div className="flex flex-col m-2.5 space-y-4 w-full ">
          <div className=" py-1 px-1 flex flex-row  bg-slate-300 rounded-xl"> 
            <div><NavLink to="/"> <img className="flex mx-auto h-12 justify-start" src="/nav_arrow_left_icon.png" alt="Back" /> </NavLink></div> 
            <div className="mx-20 flex font-extrabold text-2xl text-blue-950 h-12 ">Notifications</div>
          </div>
          
           <div className="py-8 px-8 w-11/12 h-28 mx-auto bg-slate-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img className="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src="/airtel.png" alt="Airtel Malawi" />
                    <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                    <p className="text-lg text-black font-semibold">
                   Airtel Malawi
                 </p>
                <p className="text-slate-500 font-medium">
               Company
             </p>
           </div>
           <div>
          <button className=" px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border bg-blue-950  border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">View
      </button>
     </div>
   </div>
  </div>

  <div className="py-8 px-8 w-11/12 h-28 mx-auto bg-slate-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img className="block mx-auto w-24 h-24 rounded-full sm:mx-0 sm:shrink-0" src="/macra.png" alt="MACRA" />
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">
          MACRA
        </p>
        <p className="text-slate-500 font-medium">
          Organisation
        </p>
      </div>
      <button className="px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border bg-blue-950 border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">View</button>
    </div>
  </div>
  
  <div className="py-8 px-8 w-11/12 h-28 mx-auto bg-slate-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img className="block mx-auto w-24 h-24 rounded-full sm:mx-0 sm:shrink-0" src="/tnm.png" alt="TNM" />
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">
          Telekom Networks Malawi
        </p>
        <p className="text-slate-500 font-medium">
          Company
        </p>
      </div>
      <div>
      <button className="px-4 py-1 text-sm text-orange-500 font-semibold rounded-full borde bg-blue-950  border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">View</button>
    </div>
    </div>
  </div>

  <div className="py-8 px-8 w-11/12 h-28 mx-auto bg-slate-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/mukulu.png" alt="Mukulu" />
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">
          Mukulu 
        </p>
        <p className="text-slate-500 font-medium">
          Company
        </p>
      </div>
      <button className="px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border bg-blue-950  border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">View</button>
    </div>
      </div>
    
      </div>
      )
    }

export default Notificationspage;
