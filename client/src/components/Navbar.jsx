
import axios from 'axios';
import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { context } from '../context/authContext';

const Navbar = () => {
  const { user, setUser, logout, setLogout } = useContext(context);
  const history = useHistory();


  const handleLogout = async()=>{
    const response = await axios.get('http://localhost:5000/auth/logout', {withCredentials: true});
    setLogout(response.data)
    history.push('/')
    
  }

  return (
    <div className='bg-black w-full h-[8vh] flex text-white items-center'>
      <div className='w-full'>
        <h2>Marvel Search</h2>
      </div>
      <div className='w-full h-full flex items-center justify-end'>
        {user ? (
          <div className='flex'>
            <p className='p-5'>Hi, {user}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to='/'>
            <h1>Login</h1>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
