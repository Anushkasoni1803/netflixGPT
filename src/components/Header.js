import React , {useEffect} from 'react'
import DropdownMenu from '../utils.js/DropdownMenu'
import {  useNavigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils.js/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils.js/userSlice';
import { NetflixURL } from '../utils.js/constants';
import { useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const newuser = useSelector(s=>s.user)

  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
        if (user) { // User is signed in
          const {uid, email, displayName, photoURL} = user;
          dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}))
          navigate('/browse')
        } else { // User is signed out
          dispatch(removeUser());
          navigate('/');         
        }
      });
      // unsubscribe when component unmounted
      return ()=>unsubscribe();
},[])

  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 '>
        <div className=" px-10 flex justify-between " >
            <img className='w-56' 
            src={NetflixURL} 
            alt='logo' ></img>
        <div className='flex '>
        
        {newuser && <DropdownMenu />}
        </div>

        </div>
       
    </div>
  )
}

export default Header;