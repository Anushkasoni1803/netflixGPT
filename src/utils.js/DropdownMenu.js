// Import React and useState for managing dropdown state
import React, { useState } from 'react';
import { useEffect } from 'react';
import { auth } from './firebase';
import {  signOut } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();
  const user = useSelector((store) => store.user)

  
  const handlesignout = ()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate('/');
      console.log("logout successful")
    }).catch((error) => {
      // An error happened.
      // navigate('/error');
      console.log("logout with error successful")

    });
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    // Close the dropdown if clicking outside
    if (e.target.closest('.dropdown-container') === null) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach event listener when dropdown is open
    if (isOpen) {
      document.addEventListener('click', closeDropdown);
    } else {
      document.removeEventListener('click', closeDropdown);
    }

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, [isOpen]);

  return (
    <div className=" mt-16 relative dropdown-container inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <img className='w-7' src={user.photoURL} alt='user-icon'></img>

        <span className="ms-3 mt-0 font-bold text-lg"> {user.displayName} </span>
        <svg
          className="mt-1 font-bold ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.061l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button className="flex justify-normal px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">
            <img className='w-8' src={user.photoURL} alt='user-icon'></img> <span className='p-2'> My Profile</span>
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">
              Manage Profile
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">
              Transfer Profile
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">
              Accounts
            </button>
            <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" role="menuitem">
              Help Center
            </button>
            <button
             onClick={handlesignout} 
             className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left" role="menuitem">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
