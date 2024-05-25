import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Settings = () => {
    return(
        <div className="h-screen w-full flex flex-flow items-center justify-center">
        <div className="flex flex-flow items-center justify-center h-[550px] w-[400px] bg-gray-200 rounded-xl ">
        
            <form>
                <div className="flex flex-flow gap-10 mb-5">
                <FaArrowLeft className="h-5 w-5 mr-5 mt-1"/>
                <h1 className="font-bold text-[20px] text-center mb-4">Settings</h1>
                </div>
            <div className="w-[300px]">
            <label className="block">
          <span className="block text-sm font-medium text-slate-700">Change Name</span>
          <input type="text" placeholder="enter new name" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        :bg-slate-50:text-slate-500:border-slate-200:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "/>
        </label>
            </div>
            <div className="mt-5">
            <label className="block">
          <span className="block text-sm font-medium text-slate-700">Change Email</span>
          <input type="email" placeholder="enter new email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        :bg-slate-50:text-slate-500:border-slate-200:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "/>
        </label>
            </div>
            <div className="mt-5">
            <label className="block">
          <span className="block text-sm font-medium text-slate-700"> Change Password</span>
          <input type="password" placeholder="enter new password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        :bg-slate-50:text-slate-500:border-slate-200:shadow-none
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "/>
        </label>
            </div>
            <div className="mt-5">
            <label className="block ">
          <span className="block text-sm font-medium text-slate-700"> Confirm Password</span>
          <input type="password" placeholder="enter new  password" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
        :bg-slate-50:text-slate-500:border-slate-200:shadow-none 
            invalid:border-pink-500 invalid:text-pink-600
            focus:invalid:border-pink-500 focus:invalid:ring-pink-500
          "/>
        </label>
        <div className="mt-5">
             <p className="text-red-500 text-center underline" > Delete account</p>
        </div>
        <div className="mt-5 flex flex-flow items-center justify-center">
            <button className="bg-blue-950 text-orange-500 text-center font-bold rounded-xl py-2 px-6 text-[20px] hover:bg-blue-900">Update</button>
        </div>
            </div>
        
        
      </form>
        </div>
        </div>
        
    )
}
export  default Settings;