import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {



  return (
    <div className='bg-black w-full h-[8vh] flex text-white items-center'>
      <div className='w-full'>
      <h2>Marvel Search</h2>
      </div>
        
        <div className='w-full h-full flex items-center justify-end'>
           <Link to ='/'><h1>Login</h1></Link>
        </div>
    </div>
  )
}

export default Navbar