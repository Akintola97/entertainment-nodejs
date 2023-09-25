import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../AuthContext";
import { FaTimes } from "react-icons/fa";
import backendUrl from "../config";

const Saved = () => {
  const [savedCharacters, setSavedCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { user } = useAuth();

  useEffect(() => {
    const fetchSavedCharacters = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/auth/savedCharacters`
        );
        const fetchedCharacters = response.data;
        setSavedCharacters(fetchedCharacters);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching saved characters:", error);
        setIsLoading(false);
      }
    };

    fetchSavedCharacters();
  }, []);

  const handleRemoveCharacter = async (characterId) => {
    try {
      await axios.delete(
        `${backendUrl}/auth/removeCharacter/${characterId}`
      );
      setSavedCharacters((prevCharacters) =>
        prevCharacters.filter((character) => character._id !== characterId)
      );
    } catch (error) {
      console.error("Error removing character:", error);
    }
  };

  return (
    <div className="w-full h-screen">
      <h1 className="text-center font-bold capitalize text-[5vmin] mt-20">
        {user}'s Saved Characters
      </h1>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {savedCharacters.map((character) => (
              <div key={character._id} className="col-span-1 p-3 relative">
                <img
                  className="w-full md:h-full md:p-5"
                  src={character.imageUrl}
                  alt={character.description}
                />
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                  onClick={() => handleRemoveCharacter(character._id)}
                  style={{ zIndex: 1 }}
                >
                  <FaTimes /> 
                </button>
                <h1 className="text-center">{character.characterName}</h1>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Saved;
