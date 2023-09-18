import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import HeroPage from "./pages/HeroPage";



function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Login />}  />
        <Route path = '/register' element = {<Register />}  />
        <Route path = '/heropage' element = {<HeroPage />} />
      </Routes>
    </div>
  );
}

export default App;
