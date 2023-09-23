// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../AuthContext';

// const Navbar = () => {
//   const { user, logout } = useAuth();

//   return (
//     <div className="fixed top-0 left-0 right-0 bg-black w-full h-[8vh] flex text-white items-center z-10">
//       <div className="w-full">
//         <h2>Marvel Search</h2>
//       </div>
//       <div className="w-full h-full flex items-center justify-end">
//         {user ? (
//           <div className="flex">
//             <p className="p-5">Hi, {user}</p>
//             <button onClick={logout}>Logout</button>
//           </div>
//         ) : (
//           <Link to="/">
//             <h1>Login</h1>
//           </Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="fixed top-0 left-0 right-0 bg-black w-full h-[8vh] flex text-white items-center z-10">
      <div className="w-full">
        <h2>Marvel Search</h2>
      </div>
      <div className="w-full h-full flex items-center justify-end">
        {user ? (
          <div className="flex">
            <p className="p-5">Hi, {user}</p>
            <button onClick={logout}>Logout</button>
            {/* Add a link to the "Saved" page */}
            <Link to="/saved">
              <p className="p-5">Saved</p>
            </Link>
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

