import axios from 'axios'
import React from 'react'
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { context } from '../context/authContext';

axios.defaults.withCredentials = true;

const HeroPage = () => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(context);


  return (
    <div>
        
    </div>
  )
}

export default HeroPage