import React from 'react'
import Headerbar2 from './Headerbar2';
import Searchbar from './Searchbar'

const CompanyNotifications =() => {
  return (
    <div className="flex flex-col m-2.5 bg-slate-400 space-y-4 w-full ">
      <div className="flex flex-row h-20 w-full bg-slate-900 items-start justify-between "><h1><Headerbar2/></h1></div>
      <div className="flex w-4/6 justify-center "><Searchbar /></div>
       <p className="px-11  ">Received Applications</p>
      <div class="py-8 px-8 w-11/12 h-24 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src="/Moana.jpg" alt="Moana" />
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
         Moana Maveli
        </p>
        <p class="text-slate-500 font-medium">
        Psychologist
        </p>
      </div>
      <div>
      <button class=" px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border bg-blue-950  border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2">Accept application</button>
      </div>
    </div>
  </div>

  <div class="py-8 px-8 w-11/12 h-24 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto w-20 h-24 rounded-full sm:mx-0 sm:shrink-0" src="/John.jpg" alt="John" />
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          John Smith
        </p>
        <p class="text-slate-500 font-medium">
          AI Engineer
        </p>
      </div>
      <button class="px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border bg-blue-950 border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"> Accept application</button>
    </div>
  </div>
  
  <div class="py-8 px-8 w-11/12 h-24 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto w-20 h-24 rounded-full sm:mx-0 sm:shrink-0" src="/flower&pc.jpg" alt="Shavah" />
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          Shavah Mongali
        </p>
        <p class="text-slate-500 font-medium">
          Graphic designer
        </p>
      </div>
      <div>
      <button class="px-4 py-1 text-sm text-orange-500 font-semibold rounded-full borde bg-blue-950  border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"> Accept application</button>
    </div>
    </div>
  </div>

  <div class="py-8 px-8 w-11/12 h-24 mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-20 rounded-full sm:mx-0 sm:shrink-0" src="/Jane.jpg" alt="Jane" />
    <div class="text-center space-y-2 sm:text-left">
      <div class="space-y-0.5">
        <p class="text-lg text-black font-semibold">
          Jane Yakhum
        </p>
        <p class="text-slate-500 font-medium">
          Software Engineer
        </p>
      </div>
      <button class="px-4 py-1 text-sm text-orange-500 font-semibold rounded-full border bg-blue-950  border-purple-200 hover:text-white hover:bg-blue-900 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2"> Accept application</button>
    </div>
  </div>
   <div> </div>
  </div>
  )
}

export default CompanyNotifications;