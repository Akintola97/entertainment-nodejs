// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import HeroPage from "./pages/HeroPage";
// import {context} from './context/authContext';
// import { useState } from "react";



// function App() {


//   const [user, setUser] = useState('');





//   return (
//     <div>
//       <context.Provider value={{user, setUser}} >
//       <Navbar />
//       <Routes>
//         <Route path = '/' element = {<Login />}  />
//         <Route path = '/register' element = {<Register />}  />
//         <Route path = '/heropage' element = {<HeroPage />} />
//       </Routes>
//       </context.Provider>
//     </div>
//   );
// }

// export default App;


import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import HeroPage from "./pages/HeroPage";
import { context } from './context/authContext';
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState('');
  const [logout, setLogout] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/userinfo');
      setUser(response.data.username);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <context.Provider value={{ user, setUser, logout, setLogout }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/heropage' element={<HeroPage />} />
        </Routes>
      </context.Provider>
    </div>
  );
}

export default App;
