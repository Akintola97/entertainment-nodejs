import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HeroPage = () => {
  const [data, setData] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const transitionDelay = 20000; // 5 seconds

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      // Calculate the index of the next item
      const nextIndex = (currentItemIndex + 1) % data.length;
      setCurrentItemIndex(nextIndex);
    }, transitionDelay);

    // Clear the timer when the component unmounts or when data changes
    return () => clearInterval(timer);
  }, [currentItemIndex, data]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/marvel/db');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const currentItem = data[currentItemIndex]?.results[0];

  return (
    <div className='w-full md:h-[100vh] h-[50vh] relative'>
      <div className='md:w-[100vw] w-full md:h-[100vh] h-full'>
        {currentItem && (
          <img
            className='w-full h-full'
            src={`${currentItem.thumbnail?.path}.${currentItem.thumbnail?.extension}`}
            alt={currentItem.title}
          />
        )}
      </div>
      <div className='absolute md:w-[40%] w-full bottom-[10%] left-0 p-5 bg-gradient-to-b from-black'>
        <h1 className='text-white font-bold text-[3vmin]'>{currentItem?.title}</h1>
        <p className='text-white text-sm'>{currentItem?.description}</p>
      </div>
    </div>
  );
};

export default HeroPage;
