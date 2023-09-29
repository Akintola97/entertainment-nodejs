import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black w-full h-[8vh] flex text-white items-center z-10">
      <ul className="w-full flex items-center justify-between p-2">
        <li className="flex items-center space-x-4">
          <Link to={user ? "/marvel/heropage" : "/marvel"} className="nav-link">
            <h2 className="p-5 text-[3vmin] hover:text-yellow-300 font-bold">Marvel Heroes</h2>
          </Link>
        </li>
        <li className="flex items-center space-x-4">
          {user && (
            <>
              <span className="nav-link text-[1.8vmin] sm:text-[2.2vmin]">
                Hi, {user}
              </span>

              <Link
                to="/marvel/heropage"
                className="nav-link text-[1.8vmin] sm:text-[2.2vmin] hover:text-yellow-300"
              >
                Home
              </Link>

              <Link
                to="/marvel/saved"
                className="nav-link text-[1.8vmin] sm:text-[2.2vmin] hover:text-yellow-300"
              >
                Saved
              </Link>

              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-3 sm:px-4 rounded transition duration-300 ease-in-out text-[2.4vmin]"
              >
                Logout
              </button>
            </>
          )}

          {!user && (
            <Link to="/marvel">
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-3 sm:px-4 rounded transition duration-300 ease-in-out text-[2.0vmin]">
                Login
              </button>
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
