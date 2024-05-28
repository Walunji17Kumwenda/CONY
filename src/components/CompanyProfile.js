import React from 'react';
import { FaUserCircle,FaArrowLeft } from "react-icons/fa";
import {useForm} from "react-hook-form";
import { NavLink } from 'react-router-dom';

function CompanyProfile() {
    const {register,handleSubmit} = useForm();
    const onSubmit = data =>{
        console.log(data);
    };



    return(
        <div className="w-full h-screen flex flex-flow items-center justify-center ">
            <div className="flex flex-flow items-center justify-center rounded-xl gap-5 h-[600px] w-[400px] bg-gray-200">
               
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-5 flex flex-flow gap-10">
                    <FaArrowLeft className='h-5 w-5'/>
                    <h1 className="mb-8 text-center text-[20px] font-semibold"> Build your Profile</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <FaUserCircle className="h-16 w-16"/>
                    </div>

                    <div className="m-4">
                    <input type="text area" placeholder="services offered" name="serviceOffered" {...register("serviceOffered",{required:true,})} className="h-[100px] w-[300px] leading-tight rounded-xl p-2 outline-none border-2 border-gray-300 bg-gray-100"/>
                    </div>

                    <div className="m-4">
                    <input type="text area" placeholder="contact information" name="contactInformation" {...register("contactInformation",{required: true,})} className="h-[100px] w-[300px] rounded-xl p-2 outline-none border-2 border-gray-300 bg-gray-100"/>
                    </div>

                    <div className="m-4">
                    <input type="text area" placeholder="companys vision" name="companyVision" {...register("companyVision",{required: true,})} className="h-[100px] w-[300px] rounded-xl p-2 outline-none border-2 border-gray-300 bg-gray-100"/>
                    </div>
                    <div className="mt-10 flex items-center justify-center">
                     <NavLink to = "/profile">  <button type="submit" className="bg-blue-950 text-orange-500 hover:bg-blue-900 font-bold rounded-xl py-2 px-10">Save</button></NavLink> 
                    </div>

                </form>
            </div>
        </div>
    );
    
}
export default CompanyProfile;