import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';


const Navbar = () => {
  const { user, logout } = useAuth(); // Access the user state and logout function from context


  return (
    <div className="bg-black w-full h-[8vh] flex text-white items-center">
      <div className="w-full">
        <h2>Marvel Search</h2>
      </div>
      <div className="w-full h-full flex items-center justify-end">
        {user ? (
          <div className="flex">
            <p className="p-5">Hi, {user}</p>
            <button onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link to="/">
            <h1>Login</h1>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
