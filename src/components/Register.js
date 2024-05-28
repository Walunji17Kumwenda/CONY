import { React,useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register(){
    const {register, handleSubmit,watch, formState:{errors}} = useForm();
    const onSubmit = data =>{
        console.log(data);
    };
    const [userType, setUserType] = useState("individual");
    const handleUserTypeChange = (event) =>{
        setUserType(event.target.value);
    };
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');
    const  navigate = useNavigate();
    
    const handleClick =()=>{
        if (userType === 'company') {
            navigate('/companyprofile');
        }else if(userType === 'individual'){
            navigate('/homepg');
        }
    };
   

    return(
        <div className="w-full h-screen flex flex-flow items-center justify-center ">
            <div className="flex flex-flow items-center justify-center bg-gray-200 h-[600px] w-[400px] rounded-xl">
               
                <form onSubmit={handleSubmit(onSubmit)} className="w-[300px]">
                    <h1 className="mb-8 text-[30px] text-center font-semibold">Register</h1>
                    <div className="flex flex-flow items-cnter justify-center gap-5">
                        <label><input type="radio" value="individual"
                        checked={userType === 'individual'} onChange={handleUserTypeChange}/> Individual</label>
                        <label  className="has-[:checked]:text-blue-950"><input type="radio"  className="checked:border-blue-950" value='company' 
                        checked={userType === 'company'} onChange={handleUserTypeChange}/> Company</label>
                    </div>

                    {userType === 'individual' &&(
                        <>
                        <div className=" mt-4  m-[30px 0]">
                            <input type="text" placeholder="first name"  name="firstName" 
                             className="p-2 w-[300px] border-none outline-none rounded-xl" {...register("firstName", {required: true})}/>
                             {errors.firstName?.type === "required" && <p className="text-red-500">first name is required</p>}
                        </div>
                        <div className=" mt-4  m-[30px 0]">
                            <input type="text" placeholder="last name" name="lastName" 
                             className="p-2 w-full border-none outline-none rounded-xl" {...register("lastName",{required:true})}/>
                             {errors.lastName?.type === "required" && <p className="text-red-500">last name is required</p>}
                        </div>
                        <div className=" mt-4  m-[30px 0]">
                            <input type="email" placeholder="Email" name="email" {...register("email",{required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}
                             className="p-2 w-full border-none outline-none rounded-xl"/>
                             {errors.email?.type==="required" && <p className="text-red-500">email is required</p>}
                             {errors.email?.type==="pattern" && <p className="text-red-500">email pattern is wrong</p>}
                        </div>
                        <div className=" mt-4 relative m-[30px 0]">
                            <input type="password" placeholder="password" name="password" {...register("password",{required:true, minLength: 8, maxLength: 20})}
                           className="p-2 w-full border-none outline-none rounded-xl" />
                           {errors.password?.type === "minLength" && <p className="text-red-500">password must be atleast 8 characters</p>}
                           {errors.password?.type === "maxLength" && <p className="text-red-500">password must be less than 20 characters</p>}
                        </div>
                        <div className=" mt-4 relative m-[30px 0]">
                            <input type="password" placeholder="confirm password" name="confirmPassword" {...register("confirmPassword",{required: true,})}
                             className="p-2 w-full border-none outline-none rounded-xl "/>
                              {password !== confirmPassword && <p className="text-red-500">password do not match</p>}
                        </div>
                        </>
                    )}
                    {userType === 'company' && (
                        <>
                            <div className=" mt-4  m-[30px 0]">
                                <input type="text" placeholder="company name" name="companyName" {...register("companyName",{required:true,})} 
                                 className="p-2 w-[300px] border-none outline-none rounded-xl" />
                                 {errors.companyName?.type === "required" && <p className="text-red-500">company name is required</p>}
                            </div>
                            <div className=" mt-4  m-[30px 0]">
                                <input type="text" placeholder="licence number" name="licenceNumber" {...register("licenceNumber",{required: true,})}
                               className="p-2 w-full border-none outline-none rounded-xl"/>
                               {errors.licenceNumber?.type === "required" && <p className="text-red-500">licence number is required</p>}
                            </div>
                            <div className=" mt-4 m-[30px 0]">
                                <input type="date" placeholder="Established date" name="establishedDate" {...register("establishedDate",{required: true,})}
                                 className="p-2 w-full border-none outline-none rounded-xl"/>
                                 {errors.establishedDate?.type === "required" && <p className="text-red-500">established date is required</p>}
                           </div>
                           <div className=" mt-4  m-[30px 0]">
                            <input type="email" placeholder="Email" name="email" {...register("email",{required: true,})}
                           className="p-2 w-full border-none outline-none rounded-xl"/>
                              {errors.email?.type==="required" && <p className="text-red-500">email is required</p>}
                              {errors.email?.type==="pattern" && <p className="text-red-500">email pattern is wrong</p>}
                        </div>
                           <div className=" mt-4 m-[30px 0]">
                                <input type="password" placeholder="password" name="password" {...register("password",{required: true, minLength: 8})}
                               className="p-2 w-full border-none outline-none rounded-xl"/>
                                {errors.password?.type === "minLength" && <p className="text-red-500">password must be atleast 8 characters</p>}
                                {errors.password?.type === "required" && <p className="text-red-500">password is required</p>}
                            
                           </div>
                           <div className=" mt-4  m-[30px 0]">
                            <input type="password" placeholder="confirm password" name="confirmPassword" {...register("confirmPassword",{required: true,})}
                                 className="p-2 w-full border-none outline-none rounded-xl"/>   
                                 {password !== confirmPassword && <p className="text-red-500">password do not match</p>}
                           </div>
                        </>
                    )}
                <div className=" mt-6  m-[30px 0]">
                <button type="submit" onClick={handleClick} className="hover:bg-blue-900 transtion-all duration-500  bg-blue-950 text-orange-500 w-full mt-8 p-2 rounded-xl font-bold ">Register</button>
                </div>
                </form>
            </div>
        </div>
    );
}
export default Register;