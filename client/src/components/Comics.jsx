import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from 'react-router-dom'

const Comics = ({ comicData }) => {

  const [comicName, setComicName] = useState('');
  const [searchedComicData, setSearchedComicData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/marvel/comic/search', { comicName });
      const searchData = response.data;

      if (searchData && searchData.data && searchData.data.results && searchData.data.results.length > 0) {
        setSearchedComicData(searchData.data.results);
      } else {
        setSearchedComicData([]);
        window.alert(`No results found for "${comicName}"`);
      }
    } catch (error) {
      console.error('Error fetching search data:', error);
      setSearchedComicData([]);
      window.alert('Error occurred while fetching data.');
    }

    setComicName('');
  }

  const comicsToRender = searchedComicData.length > 0 ? searchedComicData : (comicData[0]?.data?.results || []);

  return (
    <div className='w-full h-full'>
        <div className='w-full h-full flex justify-end'>
      <form className='p-3' onSubmit={handleSubmit}>
        <input
          className='bg-transparent focus:outline-none border-b text-black cursor-pointer'
          type='text'
          placeholder='Search...'
          value={comicName}
          onChange={e => setComicName(e.target.value)}
        />
        <button className='text-white bg-green-500 rounded-md p-1.5'> <AiOutlineSearch className='text-[2.0vmin]' /></button>
      </form>
      </div>
      <div className='w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 md:p-5 p-1'>
        {comicsToRender.map((comic, index) => (
          <div key={index}>
            {comic.thumbnail && (
          <a href={comic.urls[0].url} target="_blank" rel="noopener noreferrer">
              <img className='p-5 hover:scale-105 transition-transform cursor-pointer'
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              </a>
            )}
            <h2 className='text-center'>{comic.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comics;


