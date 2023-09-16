import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Hero from "./pages/Hero";


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Login />}  />
        <Route path = '/register' element = {<Register />}  />
        <Route path = '/hero' element = {<Hero />} />
      </Routes>
    </div>
  );
}

export default App;
