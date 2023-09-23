import axios from "axios";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { FaHeart } from "react-icons/fa";

const Characters = ({ charactersData }) => {
  const [characterName, setCharacterName] = useState("");
  const [searchedCharacterData, setSearchedCharacterData] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsSaved(false);
    setOpenModal(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setOpenModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/marvel/character/search",
        { characterName }
      );
      const searchData = response.data;

      if (
        searchData &&
        searchData.data &&
        searchData.data.results &&
        searchData.data.results.length > 0
      ) {
        setSearchedCharacterData(searchData.data.results);
      } else {
        setSearchedCharacterData([]);
        window.alert(`No results found for "${characterName}"`);
      }
    } catch (error) {
      console.error("Error fetching search data:", error);
      setSearchedCharacterData([]);
      window.alert("Error occurred while fetching data.");
    }

    setCharacterName("");
  };

  const saveCharacter = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/saveCharacter', {
        characterId: selectedImage.id,
        characterName: selectedImage.name,
        imageUrl: selectedImage.src,
        description: selectedImage.description,
      });
  
      if (response.status === 200) {
        setSuccessMessage(response.data.message);
        window.alert(successMessage)
        setIsSaved(true); 
      }
    } catch (error) {
      console.error('Error saving character:', error);
      if (error.response && error.response.status === 400) {
        setErrorMessage(error.response.data.message);
        window.alert(errorMessage);
      }
    }
  };
  

  const charactersToRender =
    searchedCharacterData.length > 0
      ? searchedCharacterData
      : charactersData[0]?.results || [];

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-end">
        <form className="p-3 " onSubmit={handleSubmit}>
          <input
            className="bg-transparent focus:outline-none border-b text-black cursor-pointer"
            type="text"
            placeholder="Search..."
            value={characterName}
            onChange={(e) => setCharacterName(e.target.value)}
          />
          <button className="text-white bg-green-500 rounded-md p-1.5">
            {" "}
            <AiOutlineSearch className="text-[2.0vmin]" />
          </button>
        </form>
      </div>
      <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 md:p-5 p-1">
        {charactersToRender.map((character, index) => (
          <div key={index}>
            {character.thumbnail && (
              <img
                className="p-5 w-full md:h-full hover:scale-105 transition-transform cursor-pointer"
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.title}
                onClick={() =>
                  openImageModal({
                    id: character.id,
                    src: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                    alt: character.title,
                    description: character.description || "No description available",
                    name: character.name, 
                  })
                }
              />
            )}
            <h2 className="text-center">{character.name}</h2>
          </div>
        ))}
      </div>
      <Modal
  open={openModal}
  onClose={closeImageModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={modalStyle}>
  <Typography id="modal-modal-title" variant="h6">
      {selectedImage?.name}
    </Typography>
    <img src={selectedImage?.src} alt={selectedImage?.alt} className="max-w-full" />
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      {selectedImage?.description}
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
      <FaHeart
        size={24}
        color={isSaved ? 'red' : 'black'} 
        onClick={() => {
          if (!isSaved) {
            saveCharacter();
          }
        }}
      />
    </Box>
  </Box>
</Modal>

    </div>
  );
};

export default Characters;