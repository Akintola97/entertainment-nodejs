import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import HeroPage from "./pages/HeroPage";
import axios from "axios";
import AuthProvider from "./AuthContext";

axios.defaults.withCredentials = true;

function App() {

  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/heropage' element={<HeroPage />} />
        </Routes>
        </AuthProvider>
    </div>
  );
}

export default App;
