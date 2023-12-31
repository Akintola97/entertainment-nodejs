const crypto = require("crypto");
const axios = require("axios");

const Hero_page = require('../Model/heroPage')
const Characters = require("../Model/marvelCharacters");
const Comic = require("../Model/marvelComics");


const ts = new Date().getTime();
const privateKey = process.env.PRIVATE_KEY;
const publicKey = process.env.PUBLIC_KEY;

const hash = crypto
  .createHash("md5")
  .update(ts + privateKey + publicKey)
  .digest("hex");

const superheroNames = ["spider-man"];

exports.hero_page = async (req, res) => {
  try {
    const allCharacterData = [];

    for (const name of superheroNames) {
      const hero_content = await axios.get(
        `https://gateway.marvel.com:443/v1/public/comics?title=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      );

      const data = hero_content.data;
      if (data.data.total !== 0) {
        allCharacterData.push(data);
      }
    }

    for (const data of allCharacterData) {
      const results = data.data.results;
      const heroData = new Hero_page({
        code: data.code,
        status: data.status,
        copyright: data.copyright,
        attributionText: data.attributionText,
        attributionHTML: data.attributionHTML,
        etag: data.etag,
        data: {
          offset: data.data.offset,
          limit: data.data.limit,
          total: data.data.total,
          count: data.data.count,
          results: results,
        },
      });

      await heroData.save();
    }

    res.send(allCharacterData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.db = async (req, res) => {
  try {
    const db = await Hero_page.find();
    res.send(db);
    return res.status(200);
  } catch (error) {
    console.log(error);
  }
};

const comicNames = ["wolverine"];

exports.marvelcomics = async (req, res) => {
  try {
    const allComicsData = [];

    for (const name of comicNames) {
      const marvelComicResponse = await axios.get(
        `https://gateway.marvel.com:443/v1/public/comics?title=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=12`
      );

      const comicData = marvelComicResponse.data;
      if (comicData.data.total !== 0) {
        allComicsData.push(comicData);
      }
    }

    for (const data of allComicsData) {
      const results = data.data.results;
      const comicData = new Comic({
        code: data.code,
        status: data.status,
        copyright: data.copyright,
        attributionText: data.attributionText,
        attributionHTML: data.attributionHTML,
        etag: data.etag,
        data: {
          offset: data.data.offset,
          limit: data.data.limit,
          total: data.data.total,
          count: data.data.count,
          results: results,
        },
      });

      await comicData.save();
    }

    res.send(allComicsData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.comic_db = async (req, res) => {
  try {
    const db = await Comic.find();
    res.send(db);
    return res.status(200);
  } catch (error) {
    console.log(error);
  }
};

exports.comic_search = async (req, res) => {
  const { comicName } = req.body;
  try {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/comics?title=${comicName}&ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=12`
    );
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
};

const CharacterName = ["spider-man"];

exports.character = async (req, res) => {
  try {
    const CharacterData = [];

    for (const name of CharacterName) {
      const marvel_hero = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=12`
      );

      const data = marvel_hero.data;
      if (data.data.total !== 0) {
        CharacterData.push(data);
      }
    }

    for (const data of CharacterData) {
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

      await characterData.save();
    }

    res.send(CharacterData);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.character_db = async (req, res) => {
  try {
    const db = await Characters.find();
    res.send(db);
    return res.status(200);
  } catch (error) {
    console.log(error);
  }
};

exports.character_search = async (req, res) => {
  const { characterName } = req.body;
  try {
    const response = await axios.get(
      `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${characterName}&ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=12`
    );
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
};
