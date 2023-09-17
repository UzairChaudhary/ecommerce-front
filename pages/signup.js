"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, {useState} from "react";
import toast from "react-hot-toast";
export default function SignupPage(){

    const router = useRouter();

    const [user, setuser] = React.useState({
        name: "",
        email: "",
        password: "",
    });
   
    const handleSubmit= async (e)=>{
        try{
            e.preventDefault();
            console.log("user", user);
            const res = await axios.post("/api/users/signup", user);
            console.log("res", res.data);
            toast.success("Signup successfull");
            router.push("/login");
        }
        catch(err){
            console.log(" Signup error: ", err.message);
            toast.error(err.message)
            
        }
    }
    
    return(
        <div
        className="flex flex-col items-center  justify-center min-h-screen bg-[#14253c]" >
            <h1
            className="text-3xl text-white font-bold mb-4"
            >Signup Page</h1>
            <form onSubmit={(e)=>handleSubmit(e)} className="text-black">
                <label
                className="text-white"
                 htmlFor="name">Name:</label><br/>

                <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="text" placeholder="Name" value={user.name} onChange={(e)=>setuser({...user, name: e.target.value})} />
                <br></br>
                <label
                className="text-white" htmlFor="email">Email:</label><br/>

                <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="email" placeholder="Email" value={user.email} onChange={(e)=>setuser({...user, email: e.target.value})} />
                <br></br>
                <label
                className="text-white" htmlFor="password">Password:</label><br/>
                <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="password" placeholder="Password" value={user.password} onChange={(e)=>setuser({...user, password: e.target.value})} />
                <br></br>
                <button className="text-white p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="submit" >Signup</button>

            </form>
            <div className="flex gap-3 items-center">
            <p className="pb-4 text-white">Already have an account?</p>
            <Link
            className="text-white p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
             href="/account">Login</Link>
            </div>
        </div>

    )
  
}
