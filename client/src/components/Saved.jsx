import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Saved = () => {
  const [savedCharacters, setSavedCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch saved characters when the component mounts
    const fetchSavedCharacters = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/savedCharacters');
        const fetchedCharacters = response.data;
        setSavedCharacters(fetchedCharacters);
        setIsLoading(false); // Data has been fetched
      } catch (error) {
        console.error('Error fetching saved characters:', error);
        setIsLoading(false); // Handle error, data fetching is complete
      }
    };

    fetchSavedCharacters();
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <div>
      <h1>Saved Characters</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {savedCharacters.map((character) => (
            <li key={character._id}>
              <img src={character.imageUrl} alt={character.description} />
              <p>{character.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Saved;

