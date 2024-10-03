// src/components/Signup.js
import React, { useState } from "react";
import useRouter from "../hooks/useRouter";
import axiosApi from "../api/axiosApi";
import { userApi } from "../api/apiPaths";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [error,setError] = useState('')
  const navigate = useRouter()
  const handleSignin = ()=>{
    console.log('eror')
    navigate('')

  }
  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      if (password !== retypePassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log(name,email,password,userApi.signup,'name,email,password')
      const signup = await axiosApi.post(userApi.signup,{name,email,password},{withCredentials:true})  
      console.log(signup,'waited but didnt came')
      if(signup){
          setError(signup.data.message)
      }

      
    } catch (error) {
      
    }


    console.log("Signing up with:", { name, email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-900">Sign up</h2>
        <h2 className="text-sm text-center text-red-400">{error}</h2>
        
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <div>
            <label htmlFor="retype-password" className="block text-sm font-medium text-gray-700">
              Retype Password
            </label>
            <input
              type="password"
              id="retype-password"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button onClick={(e)=>handleSubmit(e)}
            
            className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Sign up
          </button>
        

        <p onClick={()=>console.log('first')} className="mt-2 bg-red-100 text-sm text-center text-gray-600">
          Already have an account?{" "}
          <button onClick={()=>handleSignin()} className="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
            Login here
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
