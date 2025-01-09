import React from 'react'

const Header = () => {
  return (
    <div className='absolute w-full z-10'>
        <div className=" px-10  bg-gradient-to-b from-black" >
            <img className='w-56' 
            src='https://imgs.search.brave.com/2BhSv6raW7E3wOPTAUGGWArZjbqzyZvd68eVqR8ezn0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYnJh/bmRzLWluLWNvbG9y/cy83NTAwL05ldGZs/aXhfTG9nb19SR0It/NTEyLnBuZw' 
            alt='logo' ></img>
        </div>
    </div>
  )
}

export default Header