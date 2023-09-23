// // // import axios from 'axios';
// // // import React, { useState } from 'react';
// // // import { AiOutlineSearch } from "react-icons/ai";
// // // import Button from '@mui/material/Button';
// // // import Typography from '@mui/material/Typography';
// // // import Modal from '@mui/material/Modal';
// // // import Box from '@mui/material/Box';
// // // import { FaHeart } from 'react-icons/fa';


// // // const Characters = ({ charactersData }) => {

// // //   console.log(charactersData)
// // //   const [characterName, setCharacterName] = useState('');
// // //   const [searchedCharacterData, setSearchedCharacterData] = useState([]);

// // //   const [openModal, setOpenModal] = useState(false);
// // //   const [selectedImage, setSelectedImage] = useState(null);

// // //   const openImageModal = (image) => {
// // //     setSelectedImage(image);
// // //     setOpenModal(true);
// // //   };

// // //   const closeImageModal = () => {
// // //     setSelectedImage(null);
// // //     setOpenModal(false);
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       const response = await axios.post('http://localhost:5000/marvel/character/search', { characterName });
// // //       const searchData = response.data;

// // //       if (searchData && searchData.data && searchData.data.results && searchData.data.results.length > 0) {
// // //         setSearchedCharacterData(searchData.data.results);
// // //       } else {
// // //         setSearchedCharacterData([]);
// // //         window.alert(`No results found for "${characterName}"`);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error fetching search data:', error);
// // //       setSearchedCharacterData([]);
// // //       window.alert('Error occurred while fetching data.');
// // //     }

// // //     setCharacterName(''); 
// // //   }

// // //   const charactersToRender = searchedCharacterData.length > 0 ? searchedCharacterData : charactersData[0]?.results || [];

// // //   const modalStyle = {
// // //     position: 'absolute',
// // //     top: '50%',
// // //     left: '50%',
// // //     transform: 'translate(-50%, -50%)',
// // //     width: 400,
// // //     bgcolor: 'white',
// // //     border: '2px solid #000',
// // //     boxShadow: 24,
// // //     p: 4,
// // //   };

// // //   return (
// // //     <div className='w-full h-full'>
// // //       <div className='w-full h-full flex justify-end'>
// // //         <form className='p-3 ' onSubmit={handleSubmit}>
// // //           <input
// // //             className='bg-transparent focus:outline-none border-b text-black cursor-pointer'
// // //             type='text'
// // //             placeholder='Search...'
// // //             value={characterName}
// // //             onChange={e => setCharacterName(e.target.value)}
// // //           />
// // //           <button className='text-white bg-green-500 rounded-md p-1.5'> <AiOutlineSearch className='text-[2.0vmin]' /></button>
// // //         </form>
// // //       </div>
// // //       <div className='w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 md:p-5 p-1'>
// // //         {charactersToRender.map((character, index) => (
// // //           <div key={index}>
// // //             {character.thumbnail && (
// // //               <img
// // //                 className='p-5 w-full md:h-full hover:scale-105 transition-transform cursor-pointer'
// // //                 src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
// // //                 alt={character.title}
// // //                 onClick={() => openImageModal({
// // //                   src: `${character.thumbnail.path}.${character.thumbnail.extension}`,
// // //                   alt: character.title,
// // //                   description: character.description || 'No description available',
// // //                 })}
// // //               />
// // //             )}
// // //             <h2 className='text-center'>{character.name}</h2>
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <Modal
// // //         open={openModal}
// // //         onClose={closeImageModal}
// // //         aria-labelledby="modal-modal-title"
// // //         aria-describedby="modal-modal-description"
// // //       >
// // //         <Box sx={modalStyle}>
// // //           <img src={selectedImage?.src} alt={selectedImage?.alt} className="max-w-full" />
// // //           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
// // //             {selectedImage?.description}
// // //           </Typography>
// // //               {/* Heart icon at the bottom center */}
// // //     <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
// // //       <FaHeart size={24} color="red" />
// // //     </Box>
// // //   </Box>
// // //       </Modal>
// // //     </div>
// // //   );
// // // };

// // // export default Characters;
// // import axios from 'axios';
// // import React, { useState } from 'react';
// // import { AiOutlineSearch } from "react-icons/ai";
// // import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// // import Modal from '@mui/material/Modal';
// // import Box from '@mui/material/Box';
// // import { FaHeart } from 'react-icons/fa';

// // const Characters = ({ charactersData }) => {
// //   const [characterName, setCharacterName] = useState('');
// //   const [searchedCharacterData, setSearchedCharacterData] = useState([]);

// //   const [openModal, setOpenModal] = useState(false);
// //   const [selectedImage, setSelectedImage] = useState(null);
// //   const [isSaved, setIsSaved] = useState(false); // Track whether the character is saved

// //   const openImageModal = (image) => {
// //     setSelectedImage(image);
// //     setIsSaved(false); // Reset the saved state when opening a new image modal
// //     setOpenModal(true);
// //   };

// //   const closeImageModal = () => {
// //     setSelectedImage(null);
// //     setOpenModal(false);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post('http://localhost:5000/marvel/character/search', { characterName });
// //       const searchData = response.data;

// //       if (searchData && searchData.data && searchData.data.results && searchData.data.results.length > 0) {
// //         setSearchedCharacterData(searchData.data.results);
// //       } else {
// //         setSearchedCharacterData([]);
// //         window.alert(`No results found for "${characterName}"`);
// //       }
// //     } catch (error) {
// //       console.error('Error fetching search data:', error);
// //       setSearchedCharacterData([]);
// //       window.alert('Error occurred while fetching data.');
// //     }

// //     setCharacterName('');
// //   };

// //   const saveCharacter = async () => {
// //     try {
// //       const response = await axios.post('http://localhost:5000/auth/saveCharacter', {
// //         characterId: selectedImage.id, // Assuming you have a unique ID for each character
// //         imageUrl: selectedImage.src,
// //         description: selectedImage.description,
// //       });
// //       if (response.status === 200) {
// //         setIsSaved(true); // Character is saved, change the heart icon color to red
// //       }
// //     } catch (error) {
// //       console.error('Error saving character:', error);
// //     }
// //   };

// //   const charactersToRender = searchedCharacterData.length > 0 ? searchedCharacterData : charactersData[0]?.results || [];

// //   const modalStyle = {
// //     position: 'absolute',
// //     top: '50%',
// //     left: '50%',
// //     transform: 'translate(-50%, -50%)',
// //     width: 400,
// //     bgcolor: 'white',
// //     border: '2px solid #000',
// //     boxShadow: 24,
// //     p: 4,
// //   };

// //   return (
// //     <div className='w-full h-full'>
// //       <div className='w-full h-full flex justify-end'>
// //         <form className='p-3 ' onSubmit={handleSubmit}>
// //           <input
// //             className='bg-transparent focus:outline-none border-b text-black cursor-pointer'
// //             type='text'
// //             placeholder='Search...'
// //             value={characterName}
// //             onChange={e => setCharacterName(e.target.value)}
// //           />
// //           <button className='text-white bg-green-500 rounded-md p-1.5'> <AiOutlineSearch className='text-[2.0vmin]' /></button>
// //         </form>
// //       </div>
// //       <div className='w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 md:p-5 p-1'>
// //         {charactersToRender.map((character, index) => (
// //           <div key={index}>
// //             {character.thumbnail && (
// //               <img
// //                 className='p-5 w-full md:h-full hover:scale-105 transition-transform cursor-pointer'
// //                 src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
// //                 alt={character.title}
// //                 onClick={() => openImageModal({
// //                   id: character.id, // Assuming you have a unique ID for each character
// //                   src: `${character.thumbnail.path}.${character.thumbnail.extension}`,
// //                   alt: character.title,
// //                   description: character.description || 'No description available',
// //                 })}
// //               />
// //             )}
// //             <h2 className='text-center'>{character.name}</h2>
// //           </div>
// //         ))}
// //       </div>
// //       <Modal
// //         open={openModal}
// //         onClose={closeImageModal}
// //         aria-labelledby="modal-modal-title"
// //         aria-describedby="modal-modal-description"
// //       >
// //         <Box sx={modalStyle}>
// //           <img src={selectedImage?.src} alt={selectedImage?.alt} className="max-w-full" />
// //           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
// //             {selectedImage?.description}
// //           </Typography>
// //           {/* Heart icon at the bottom center */}
// //           <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
// //             <FaHeart
// //               size={24}
// //               color={isSaved ? 'red' : 'black'} // Change the heart icon color based on isSaved state
// //               onClick={() => {
// //                 if (!isSaved) {
// //                   saveCharacter(); // Save the character when the heart icon is clicked
// //                 }
// //               }}
// //             />
// //           </Box>
// //         </Box>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default Characters;

// // src/components/Characters.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { AiOutlineSearch } from "react-icons/ai";
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import { FaHeart } from 'react-icons/fa';

// const Characters = ({ charactersData }) => {
//   const [characterName, setCharacterName] = useState('');
//   const [searchedCharacterData, setSearchedCharacterData] = useState([]);

//   const [openModal, setOpenModal] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isSaved, setIsSaved] = useState(false); // Track whether the character is saved
//   const [savedCharacters, setSavedCharacters] = useState([]); // Store saved characters

//   useEffect(() => {
//     // Fetch saved characters when the component mounts
//     const fetchSavedCharacters = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/auth/savedCharacters');
//         const fetchedSavedCharacters = response.data;
//         setSavedCharacters(fetchedSavedCharacters);

//         // Check if the currently displayed character is in the saved characters list
//         if (selectedImage && selectedImage.id) {
//           setIsSaved(fetchedSavedCharacters.some(character => character.characterId === selectedImage.id));
//         }
//       } catch (error) {
//         console.error('Error fetching saved characters:', error);
//       }
//     };

//     fetchSavedCharacters();
//   }, [selectedImage]); // Fetch saved characters whenever selectedImage changes

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/marvel/character/search', { characterName });
//       const searchData = response.data;

//       if (searchData && searchData.data && searchData.data.results && searchData.data.results.length > 0) {
//         setSearchedCharacterData(searchData.data.results);
//       } else {
//         setSearchedCharacterData([]);
//         window.alert(`No results found for "${characterName}"`);
//       }
//     } catch (error) {
//       console.error('Error fetching search data:', error);
//       setSearchedCharacterData([]);
//       window.alert('Error occurred while fetching data.');
//     }

//     setCharacterName('');
//   };

//   const saveCharacter = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/auth/saveCharacter', {
//         characterId: selectedImage.id,
//         imageUrl: selectedImage.src,
//         description: selectedImage.description,
//       });
//       if (response.status === 200) {
//         setIsSaved(true); // Character is saved, change the heart icon color to red
//         setSavedCharacters([...savedCharacters, {
//           characterId: selectedImage.id,
//           imageUrl: selectedImage.src,
//           description: selectedImage.description,
//         }]);
//       }
//     } catch (error) {
//       console.error('Error saving character:', error);
//     }
//   };

//   const charactersToRender = searchedCharacterData.length > 0 ? searchedCharacterData : charactersData[0]?.results || [];

//   const modalStyle = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 400,
//     bgcolor: 'white',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
//   };

//   return (
//     <div className='w-full h-full'>
//       <div className='w-full h-full flex justify-end'>
//         <form className='p-3 ' onSubmit={handleSubmit}>
//           <input
//             className='bg-transparent focus:outline-none border-b text-black cursor-pointer'
//             type='text'
//             placeholder='Search...'
//             value={characterName}
//             onChange={e => setCharacterName(e.target.value)}
//           />
//           <button className='text-white bg-green-500 rounded-md p-1.5'> <AiOutlineSearch className='text-[2.0vmin]' /></button>
//         </form>
//       </div>
//       <div className='w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 md:p-5 p-1'>
//         {charactersToRender.map((character, index) => (
//           <div key={index}>
//             {character.thumbnail && (
//               <img
//                 className='p-5 w-full md:h-full hover:scale-105 transition-transform cursor-pointer'
//                 src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
//                 alt={character.title}
//                 onClick={() => openImageModal({
//                   id: character.id,
//                   src: `${character.thumbnail.path}.${character.thumbnail.extension}`,
//                   alt: character.title,
//                   description: character.description || 'No description available',
//                 })}
//               />
//             )}
//             <h2 className='text-center'>{character.name}</h2>
//           </div>
//         ))}
//       </div>
//       <Modal
//         open={openModal}
//         onClose={closeImageModal}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={modalStyle}>
//           <img src={selectedImage?.src} alt={selectedImage?.alt} className="max-w-full" />
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             {selectedImage?.description}
//           </Typography>
//           <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
//             <FaHeart
//               size={24}
//               color={isSaved ? 'red' : 'black'}
//               onClick={() => {
//                 if (!isSaved) {
//                   saveCharacter();
//                 }
//               }}
//             />
//           </Box>
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Characters;

import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { FaHeart } from 'react-icons/fa';

const Characters = ({ charactersData }) => {
  const [characterName, setCharacterName] = useState('');
  const [searchedCharacterData, setSearchedCharacterData] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSaved, setIsSaved] = useState(false); // Track whether the character is saved

  const openImageModal = (image) => {
    setSelectedImage(image);
    setIsSaved(false); // Reset the saved state when opening a new image modal
    setOpenModal(true);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
    setOpenModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/marvel/character/search', { characterName });
      const searchData = response.data;

      if (searchData && searchData.data && searchData.data.results && searchData.data.results.length > 0) {
        setSearchedCharacterData(searchData.data.results);
      } else {
        setSearchedCharacterData([]);
        window.alert(`No results found for "${characterName}"`);
      }
    } catch (error) {
      console.error('Error fetching search data:', error);
      setSearchedCharacterData([]);
      window.alert('Error occurred while fetching data.');
    }

    setCharacterName('');
  };

  const saveCharacter = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth/saveCharacter', {
        characterId: selectedImage.id, // Assuming you have a unique ID for each character
        imageUrl: selectedImage.src,
        description: selectedImage.description,
      });
      if (response.status === 200) {
        setIsSaved(true); // Character is saved, change the heart icon color to red
      }
    } catch (error) {
      console.error('Error saving character:', error);
    }
  };

  const charactersToRender = searchedCharacterData.length > 0 ? searchedCharacterData : charactersData[0]?.results || [];

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className='w-full h-full'>
      <div className='w-full h-full flex justify-end'>
        <form className='p-3 ' onSubmit={handleSubmit}>
          <input
            className='bg-transparent focus:outline-none border-b text-black cursor-pointer'
            type='text'
            placeholder='Search...'
            value={characterName}
            onChange={e => setCharacterName(e.target.value)}
          />
          <button className='text-white bg-green-500 rounded-md p-1.5'> <AiOutlineSearch className='text-[2.0vmin]' /></button>
        </form>
      </div>
      <div className='w-full h-full grid grid-cols-2 md:grid-cols-3 gap-4 md:p-5 p-1'>
        {charactersToRender.map((character, index) => (
          <div key={index}>
            {character.thumbnail && (
              <img
                className='p-5 w-full md:h-full hover:scale-105 transition-transform cursor-pointer'
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.title}
                onClick={() => openImageModal({
                  id: character.id, // Assuming you have a unique ID for each character
                  src: `${character.thumbnail.path}.${character.thumbnail.extension}`,
                  alt: character.title,
                  description: character.description || 'No description available',
                })}
              />
            )}
            <h2 className='text-center'>{character.name}</h2>
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
          <img src={selectedImage?.src} alt={selectedImage?.alt} className="max-w-full" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedImage?.description}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}>
            <FaHeart
              size={24}
              color={isSaved ? 'red' : 'black'} // Change the heart icon color based on isSaved state
              onClick={() => {
                if (!isSaved) {
                  saveCharacter(); // Save the character when the heart icon is clicked
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

