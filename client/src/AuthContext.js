import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backendUrl from './config';




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
      const response = await axios.get(`${backendUrl}/auth/userinfo`);
      setUser(response.data.username);
    } catch (error) {
      setUser(null);
      console.log(error);
    }
  };


  const logout = async () => {
    try {
      await axios.get(`${backendUrl}/auth/logout`, {
        withCredentials: true,
      })
      setUser(null);
      navigate('/marvel');
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
