import React from 'react'
import Headerbar2 from './Headerbar2'


const StudentNotifications = () => {
  return (
    <div>
      <div className="flex flex-col m-2.5 space-y-4 w-full ">
        <div className="flex flex-row h-20 w-full bg-slate-900 items-start justify-between "><h1><Headerbar2/>
          </h1></div>
            <p className="px-12  ">Trending job Adverts</p>
              <div class="py-8 px-8 w-11/12 h-28 mx-auto bg-slate-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src="/airtel.png" alt="Airtel Malawi" />
                    <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                   Airtel Malawi
                 </p>
                <p class="text-slate-500 font-medium">
               Company
             </p>
           </div>
           <div>
          <button class=" px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border bg-blue-950  border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">Apply
      </button>
     </div>
   </div>
  </div>

  <div class="py-8 px-8 w-11/12 h-28 mx-auto bg-slate-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto w-24 h-24 rounded-full sm:mx-0 sm:shrink-0" src="/macra.png" alt="MACRA" />
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          MACRA
        </p>
        <p class="text-slate-500 font-medium">
          Organisation
        </p>
      </div>
      <button class="px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border bg-blue-950 border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">Apply</button>
    </div>
  </div>
  
  <div class="py-8 px-8 w-11/12 h-28 mx-auto bg-slate-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto w-24 h-24 rounded-full sm:mx-0 sm:shrink-0" src="/tnm.png" alt="TNM" />
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          Telekom Networks Malawi
        </p>
        <p class="text-slate-500 font-medium">
          Company
        </p>
      </div>
      <div>
      <button class="px-4 py-1 text-sm text-orange-500 font-semibold rounded-full borde bg-blue-950  border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">Apply</button>
    </div>
    </div>
  </div>

  <div class="py-8 px-8 w-11/12 h-28 mx-auto bg-slate-200 rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/mukulu.png" alt="Mukulu" />
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          Mukulu 
        </p>
        <p class="text-slate-500 font-medium">
          Company
        </p>
      </div>
      <button class="px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border bg-blue-950  border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">Apply</button>
    </div>
  </div>

  </div>
  </div>
  )
}

export default StudentNotifications;

