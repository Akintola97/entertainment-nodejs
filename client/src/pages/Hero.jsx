import axios from 'axios'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Hero = () => {
  
  const [user, setUser] = useState('');

useEffect(()=>{
  fetchData();
}, [])

  
  const fetchData = async()=>{
    try {
      const response = await axios.get('http://localhost:5000/auth/userinfo', { withCredentials: true });
      console.log(response.data)

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <div>
      <h1>Hero</h1>
    </div>
  )
}

export default Hero


