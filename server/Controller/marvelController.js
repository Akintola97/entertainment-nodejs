const crypto = require("crypto");
const axios = require("axios");

const Characters = require("../Model/marvelCharacters");

const ts = new Date().getTime();
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const hash = crypto
  .createHash("md5")
  .update(ts + privateKey + publicKey)
  .digest("hex");

// Define an array of superhero names you want to retrieve
const superheroNames = ['wolverine', 'hulk', 'thor'];

exports.marvelhero = async (req, res) => {
  try {
    const allCharacterData = []; // Create an array to collect data for all superheroes

    // Loop through the superheroNames array
    for (const name of superheroNames) {
      // Make the API request with the current name
      const marvel_hero = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );

      const data = marvel_hero.data;
      if(data.data.total !== 0){
      allCharacterData.push(data); // Add data to the array
    }
}

    // Save the collected data to MongoDB
    for (const data of allCharacterData) {
      const results = data.data.results;
      const characterData = new Characters({
        code: data.code,
        status: data.status,
        copyright: data.copyright,
        attributionText: data.attributionText,
        attributionHTML: data.attributionHTML,
        etag: data.etag,
        results: results,
      });

      // Save the document to MongoDB
      await characterData.save();
      console.log(characterData);
    }

    // Send the response with all collected data
    res.send(allCharacterData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.db = async(req, res)=>{
  try{
    const db = await Characters.find();
    res.send(db);
    console.log(db)
    return res.status(200);
  }
  catch(error){
    console.log(error)
  }
}