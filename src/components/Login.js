import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { validateData } from '../utils.js/validate';
import {  createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils.js/firebase';
import { addUser } from '../utils.js/userSlice';
import { useDispatch } from 'react-redux';
import { defaultUserIcon } from '../utils.js/constants';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errormsg,seterrormsg] = useState(null);
    const dispatch = useDispatch();



    const toggleSignIn =()=>{
        setIsSignIn(!isSignIn);
        clearForm();
    }

    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);
    const mobileNumber = useRef(null);
    const formRef = useRef(null);

    const clearForm = () => {
        if (formRef.current) {
          formRef.current.reset();
        }
    }   
    
    const handlesignbtn = ()=>{
        // Validate the form Data
        const msg =validateData(email.current.value, password.current.value, mobileNumber.current.value);
        seterrormsg(msg);
        if(msg) return;
        if(isSignIn){
            // Sign In Code
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
             const user = userCredential.user;
              console.log(user)

            })
            .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorMessage + "-" + errorCode)

            });
        }else{
            // Sign Up Code
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value, name.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value,
                photoURL: defaultUserIcon
                // photoURL:"https://pbs.twimg.com/media/Dj7pdk_XoAEWZ9f.jpg"
              })
                .then(() => {
                // Profile updated!
                const {uid, email, displayName, photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}))
              }).catch((error) => {
                seterrormsg(error.message)
              });
              

             })
             .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrormsg(errorMessage + "-" + errorCode)
             });
        }
    }
  return (
   <div>
    <Header/>
   <div className='absolute'>
   <img src="https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/IN-en-20250106-TRIFECTA-perspective_27b02e7c-f668-4639-9e82-1a5485084b2a_large.jpg" alt='bg'></img>
   </div>


   <div className='relative pt-10'>

   <form ref={formRef} onSubmit={(e)=>{e.preventDefault()}} className=' px-20 py-16 mt-36 mx-auto justify-center text-start w-[500px] bg-black bg-opacity-80 rounded-xl  ' >
    <label className='font-bold text-3xl font-serif text-white' > {isSignIn ? "Sign In" : "Sign Up"} </label>
   
    {!isSignIn && <div className=''>
        <input ref={name} className=' w-full p-3 mt-5 text-white bg-transparent  border border-gray-300 rounded-md' type='text' placeholder='Name' />
    </div>}
    <input ref={email} className=' w-full p-3 mt-5 bg-transparent text-white border border-gray-300 rounded-md' placeholder='Email' />
    <input ref={mobileNumber} className=' w-full p-3 mt-5 bg-transparent text-white border border-gray-300 rounded-md' placeholder='Mobile Number' />
    <input ref={password} className=' w-full p-3 mt-5 bg-transparent text-white border border-gray-300 rounded-md' type='password' placeholder='Password' />
    <p className='text-xs font-bold p-2 text-red-600' >{errormsg}</p>
    <button className='w-full p-3 mt-5 text-white text-bold border border-red-700 bg-red-700 rounded-md' onClick={handlesignbtn} > {isSignIn ? "Sign In" : "Sign Up"} </button>
    {isSignIn && 
        <div>
        <p className='text-center p-3 font-light text-gray-300 text-lg' >OR</p>
        <button className='w-full p-3 mt-1 text-white text-bold border bg-gray-400 opacity-85 rounded-md ' >Use a sign-in code</button>
        <button className='w-full p-3 mt-1 text-white text-bold bg-transparent rounded-md' >Forgot Password?</button>
        </div>
    } 
    <div className="flex items-center space-x-2 mt-2"><div className="flex items-center space-x-2">
    <input className="px-2 mx-2 h-4 w-4 text-black-600 border-gray-300 cursor-pointer"  
  />
  <label className="text-sm font-medium text-white cursor-pointer">
    Remember me
  </label>
    </div>
    </div>
    <p className="text-start py-3 font-light cursor-pointer  text-gray-300" onClick={toggleSignIn} > {isSignIn ? "New to Netflix? " : "Already have an account? "} <span className='font-bold' >{isSignIn ? "Sign Up Now" : "Sign In Now"}</span> </p>
    <p className= "text-xs text-white text-opacity-80">This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
   </form>
   </div>
   </div> 
  )
}
export default Login