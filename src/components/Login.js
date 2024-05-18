import {React, useState} from "react";

function Login(){

    const[email,setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[errors, setErrors] = useState({});

    const handleEmailChange = (event) =>{
        setEmail(event.target.value);
    };
    const handlePasswordChange = (event) =>{
        setPassword(event.target.value);
    };
    const handleSubmit = (event) =>{
        event.preventDefault();

        setErrors({});

        const errors ={};

        if(!email){
            errors.email = 'email is required';
        }
         if(!password){
            errors.password = 'password is required';
        }else if(password.length < 8){
            errors.password = 'password must be atleast 8 characters long'
        }

       /* if(object.keys(errors).length >0){
            setErrors(errors);
        }else{

        }*/
    };
    

    return(
        <div className="flex h-screen flex-flow items-center justify-center">
        <div className="flex flex-flow items-center justify-center  rounded-xl border-3 bg-gray-200 h-[500px] w-[420px]">
        <form onSubmit={handleSubmit}>
            <h1 className="text-[36px] text-center">Login</h1>
            <div className=" mt-4 relative m-[30px 0]">      
             <input type="text" placeholder="Email" value={email} onChange={handleEmailChange} className="p-2 w-full border-none outline-none rounded-xl "/>
             {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="mt-4 relative  m-[30px 0]">
                <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} className="p-2 w-full rounded-xl outline-none border-none"/>
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="flex items-center justify-between gap-4 mt-4 ">
                <label><input type="checkbox"/> Remember me</label>
                <a href="#">forgot password?</a>
            </div>
            <div className="flex items-center justify-center mt-4">
                <button type="submit"  className="bg-blue-950 text-orange-500 w-full p-2 rounded-xl font-bold">Sign in</button>
            </div>
            <div className="flex items-center justify-center mt-4 font-semibold">
                <p>Dont have an account? <a href="#">Sign up</a></p>
            </div>

        </form>
        </div>
        </div>
    );
}

export default Login;