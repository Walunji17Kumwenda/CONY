import {React} from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

function Login(){
    const {register, handleSubmit,formState:{errors}} = useForm();

    const onSubmit = data =>{
        console.log(data);
    }; 
    
    

    return(
        <div className="flex h-screen flex-flow items-center justify-center">
        <div className="flex flex-flow items-center justify-center  rounded-xl border-3 bg-gray-200 h-[500px] w-[420px]">
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-[36px] mb-5 text-center">Login</h1>
            <div className=" mt-4 relative m-[30px 0]">      
             <input type="email" placeholder="Email" name="email" {...register("email",{required: true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})} className="p-2 w-full border-none outline-none rounded-xl "/>
             
             {errors.email?.type==="required" && <p className="text-red-500">email is required</p>}
             {errors.email?.type==="pattern" && <p className="text-red-500">email pattern is wrong</p>}
             
            </div>
            <div className="mt-4 relative  m-[30px 0]">
                <input type="password" placeholder="password" name="password" {...register("password",{required:true, minLength: 8, maxLength:20,})} className="p-2 w-full rounded-xl outline-none border-none"/>
                {errors.password?.type === "minLength" && <p className="text-red-500">password must be atleast 8 characters </p>}
                {errors.password?.type === "maxLength" && <p className="text-red-500">password must be less than 20 characters </p>}
            </div>
                
            <div className="flex items-center justify-between gap-4 mt-4 ">
                <label><input type="checkbox"/> Remember me</label>
                <a href="/">forgot password?</a>
            </div>
            <div className="flex items-center justify-center mt-4">
            <NavLink to = "/homepg">  <button type="submit"  className="bg-blue-950 hover:bg-blue-900 transtion-all duration-500 text-orange-500 py-2 px-10 w-full  rounded-xl font-bold">Sign in</button></NavLink>
            </div>
            <div className="flex items-center justify-center mt-4 font-semibold">
                <p>Dont have an account? <a href="/">Sign up</a> </p>
            </div>

        </form>
        </div>
        </div>
    );
}

export default Login;