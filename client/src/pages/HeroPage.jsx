import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

axios.defaults.withCredentials = true;

const HeroPage = () => {
    const navigate = useNavigate();



    useEffect(()=>{
        fetchData();
    },[])

    


    const fetchData = async()=>{
        try {
          const response =  await axios.get('http://localhost:5000/auth/userinfo');
            navigate('/heropage');
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        
    </div>
  )
}

export default HeroPage