const mongoose = require("mongoose");
const User = require("../Model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.jwt_secret;

exports.register = async (req, res, next) => {
  const { username, password } = req.body;
  const hashpassword = await bcrypt.hash(password, 10);
  const user = await User.findOne({ username });

  try {
    if (!username || !password) {
      return res.status(401).json({ message: "Please Provide Credentials" });
    }

    if (user) {
      return res.json({ message: "Please Login" });
    } else {
      const newUser = new User({
        username,
        password: hashpassword,
      });
      newUser.save();
      res.status(200).json({ message: "Profile Created" });
      next();
      return;
    }
  } catch (error) {
    console.log(error);
    return res.json({ message: error });
  }
};

exports.login = async (req, res, next) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  // const verifyPassword = user && user.password ? await bcrypt.compare(password, user.password) : false;
  try {
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    //Create JWT on the server side when trying to authenticate.
    //userId is the payload within the token and we are signing it with a secret.

    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: "1hr" });

    //Set the cookie as an HTTP-only cookie;
    res.cookie('authToken', token, {
      httpOnly: true, //Prevents JS access to the cookie in the browser.
      //  secure: true, //Ensures the cookie is sent only over HTTPS;
      sameSite: "Strict", //Protects against CSRF attacks
      maxAge: 36000000, //1hr
    });
    res.status(200).json({ message: "Login Succesful" });
    next();
    return;
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error" });
  }
  
};

//Create a middleware for authentication.

// exports.authenticate = async(req, res, next) => {
//   const authToken = req.cookies.authToken; //Retrieve the token from the authToken Cookie.
//   console.log(authToken);
  // if (!authToken) {
  //   return res
  //     .status(401)
  //     .json({ message: "Authentication failed - Token missing" });
  // }
  // try {
  //   const decodedToken = jwt.verify(authToken, secret);
  //   req.userId = decodedToken.userId; //Here the userID/payload is taken from the token and stored in the req object. This makes it more accessible to route handlers. It allows easy maintainance of code and allows the server to identity which user is making the request.
  //   next(); //This calls the next middleweare or route handler in the sequence.
  // } catch (error) {
  //   return res
  //     .status(401)
  //     .json({ message: "Authentication failed - Token Invalid" });
  // }
// };


// exports.userInfo = async (req, res) => {
//   const authToken = req.cookies.authToken; // Retrieve the token from the authToken Cookie.
//   console.log(authToken);
  
//   if (!authToken) {
//     return res
//       .status(401)
//       .json({ message: "Authentication failed - Token missing" });
//   }

//   try {
//     const decodedToken = jwt.verify(authToken, secret);
//     const userId = decodedToken.userId;
    
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(400).json({ message: "User not found" });
//     }

//     res.status(200).json({ username: user.username });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Server Error" });
//   }
// };

exports.authenticate = async(req, res, next) =>{
    const authToken = req.cookies.authToken;
    if(!authToken){
      res.status(401).json({
        message: "Authentication failed - Token missing"
      })
      return;
    }
    try{
    const decodedToken = jwt.verify(authToken, secret);
    const userId = decodedToken.userId;
    const user = await User.findById(userId);
 
    if(!user){
      return res.status(400).json({message: "User not found"});
    }

    res.status(200).json({username: user.username});
    next();
  }
  catch(error){
    console.error(error);
    return res.status(500).json({message: 'Server Error'});
  }
}


exports.userInfo = async(req, res) =>{
  const userId = req.id;
  const user = await User.findById(userId);
  try{
  if(!user){
    return res.status(400).json({message: "User not found"});
  }
  res.status(200).json({username: user.username});
} catch(error){
  console.log(error)
}
}