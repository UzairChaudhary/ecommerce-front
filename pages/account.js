"use client";
import styled from 'styled-components'

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast"




export default function LoginPage(){


    const router = useRouter();
    const [user, setuser] = React.useState({
        
        email: "",
        password: "",
    });

   
    const handleSubmit= async (e)=>{
        // try{
        //     e.preventDefault();
        //     const res = await axios.post("/api/users/login", user);
        //     console.log("res", res.data);
        //     toast.success("Login successfull");
        //     router.push("/index");
        // }
        // catch(err){
        //     console.log(" Login error: ", err.message);
        //     toast.error(err.message)
            
        // }
        router.push("/index")
    }
    
    return(
        
            <div
        className="flex flex-col items-center  justify-center min-h-screen bg-[#14253c]" >
            <h1
            className="text-3xl text-white font-bold mb-4"
            >Login Page</h1>
            <form onSubmit={(e)=>handleSubmit(e)} className="text-black">
                <label
                className="text-white" htmlFor="email">Email:</label><br/>

                <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="email" placeholder="Email" value={user.email} onChange={(e)=>setuser({...user, email: e.target.value})} />
                <br></br>
                <label
                className="text-white" htmlFor="password">Password:</label><br/>
                <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="password" placeholder="Password" value={user.password} onChange={(e)=>setuser({...user, password: e.target.value})} />
                <br></br>

                {/* <button className="text-white p-2 px-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600" type="submit" >Login</button> */}
                <Link
            className="text-white p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
             href="/">Login</Link>

            </form>
            <div className="flex gap-1 items-center">
            <p className="pb-4 text-white">Dont have an account?</p>
            <Link
            className="text-white p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
             href="/signup">Signup</Link>
            </div>
        </div>
        
        

    )
  
}
