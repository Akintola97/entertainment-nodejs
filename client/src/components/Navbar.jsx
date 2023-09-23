import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="fixed top-0 left-0 right-0 bg-black w-full h-[8vh] flex text-white items-center z-10">
      <div className="w-full">
        <h2 className="p-5 text-[3vmin]">Marvel Heroes</h2>
      </div>
      <div className="w-full flex flex-wrap items-center justify-end p-2">
        {user ? (
          <div className="flex items-center">
            <p className="p-2 sm:p-5">Hi, {user}</p>
            <Link to="/saved">
              <p className="p-2 sm:p-5">Saved</p>
            </Link>
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 sm:px-4 rounded transition duration-300 ease-in-out text-sm sm:text-base"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/">
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-3 sm:px-4 rounded transition duration-300 ease-in-out text-sm sm:text-base">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
