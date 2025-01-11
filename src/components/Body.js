import React from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'


const Body = () => {


    const appRouter = createBrowserRouter([
        {
            path:"/",
            element: <Login/>
        },{
            path:"/browse",
            element: <Browse/>
        }
    ])
  //   useEffect(()=>{
  //     onAuthStateChanged(auth, (user) => {
  //         if (user) {
  //           // User is signed in
  //           const {uid, email, displayName, photoURL} = user;
  //           dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}))
  //           navigate('/browse')
  //         } else {
  //           // User is signed out
  //           dispatch(removeUser());
  //           navigate('/');         
  //         }
  //       });
  // },[])

  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body