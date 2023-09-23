import React from 'react';
import { Routes, Route, Navigate, Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import HeroPage from './pages/HeroPage';
import axios from 'axios';
import AuthProvider, { useAuth } from './AuthContext';
import Saved from './components/Saved';


axios.defaults.withCredentials = true;

// Create a custom Route component for protected routes
function PrivateRoute({ element }) {
  const { user } = useAuth();

  return user ? element : <Navigate to="/" />;
}

function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/marvel" element={<Login />} />
          <Route path="/marvel/register" element={<Register />} />
          <Route
            path="/marvel/heropage"
            element={<PrivateRoute element={<HeroPage />} />}
          />
          <Route
            path="/marvel/saved"
            element={<PrivateRoute element={<Saved />} />}
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
