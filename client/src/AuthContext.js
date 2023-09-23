// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const AuthContext = createContext();

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // Initialize user as null or a loading state
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/auth/userinfo');
//       setUser(response.data.username);
//     } catch (error) {
//       setUser(''); // Set user to an empty string on error or when not authenticated
//       console.log(error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await axios.get('http://localhost:5000/auth/logout', {
//         withCredentials: true,
//       });
//       setUser('');
//       navigate('/');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, setUser, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;


// AuthProvider.js



import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/userinfo');
      setUser(response.data.username);
    } catch (error) {
      setUser(null); // Set user to null when not authenticated
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await axios.get('http://localhost:5000/auth/logout', {
        withCredentials: true,
      });
      setUser(null); // Clear the user data from state
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
