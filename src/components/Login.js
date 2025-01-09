import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleSignIn =()=>{
        setIsSignIn(!isSignIn);
    }


  return (
   <div>
    <Header/>
   <div className='absolute'>
   <img src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg" alt='bg'></img>
   </div>
   <div className='relative pt-10'>
   <form className=' px-20 py-16 mt-56 mx-auto justify-center text-start w-[500px] bg-black bg-opacity-85 rounded-xl  ' >
    <label className='font-bold text-3xl font-serif text-white' > {isSignIn ? "Sign In" : "Sign Up"} </label>
   
    {!isSignIn && <div className='mb-3'>
        <input className=' w-full p-3 mt-5 text-white bg-transparent  border border-gray-300 rounded-md' type='text' placeholder='Name' />
        <input className=' w-full p-3 mt-5 bg-transparent text-white border border-gray-300 rounded-md' type='email' placeholder='Email' />
        <input className=' w-full p-3 mt-5 bg-transparent text-white border border-gray-300 rounded-md' type='numbers' placeholder='Mobile Number' />
    <input className=' w-full p-3 mt-5 bg-transparent text-white border border-gray-300 rounded-md' type='password' placeholder='Password' />
    <button className='w-full p-3 mt-5 text-white text-bold border border-red-700 bg-red-700 rounded-md' >Sign Up</button>
    </div>}

    {isSignIn && 
        <div>
        <input className=' w-full p-3 mt-5 bg-transparent text-white border border-gray-300 rounded-md' type='email' placeholder='Email or Mobile Number' />
        <input className=' w-full p-3 mt-5 bg-transparent text-white border border-gray-300 rounded-md' type='password' placeholder='Password' />
        <button className='w-full p-3 mt-5 text-white text-bold border border-red-700 bg-red-700 rounded-md' >Sign In</button>
        <p className='text-center p-3 font-light text-gray-300 text-lg' >OR</p>
        <button className='w-full p-3 mt-1 text-white text-bold border bg-gray-400 opacity-85 rounded-md ' >Use a sign-in code</button>
        <button className='w-full p-3 mt-1 text-white text-bold bg-transparent rounded-md' >Forgot Password?</button>
        </div>
    }
    
    
    <div class="flex items-center space-x-2">
    <div class="flex items-center space-x-2">
    <input className="px-2 mx-2 h-4 w-4 text-black-600 border-gray-300 cursor-pointer"  
  />
  <label for="rememberMe" class="text-sm font-medium text-white cursor-pointer">
    Remember me
  </label>
    </div>
    </div>

    <p className="text-start py-3 font-light  text-gray-300" onClick={toggleSignIn} > New to Netflix? <span className='font-bold cursor-pointer' >Sign Up Now</span> </p>
    <p className= "text-xs text-white text-opacity-80">This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
    
   </form>
   </div>
   
   
   </div> 
  )
}

export default Login