const express = require('express');
const taskRoute = express.Router();
const bcrypt = require("bcryptjs");
//const Joi = require("@hapi/joi");
const jwt = require("jsonwebtoken");
var Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
dotenv.config();


let User = require('../models/user');


// Register api route
taskRoute.post("/register", async (req, res) => {
  // our register logic gose here

  try {

    //get user input
    const {first_name , last_name, email, password } = req.body;

    //validate user input
    if(!(email && password && first_name && last_name )) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    //Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User already exist. PLease login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    
    // Create user in our database
    const user = await User.create({
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: encryptedPassword,
      
    })
    //Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,{
        expiresIn: "2h"
      }
      
    )
    
    // Save user token
    user.token = token;
    console.log(user.token);
    //retuen new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
})
// email: req.body.email


//login api
taskRoute.post("/login",  async(req, res) => {
  // our register logic gose here 

  try {

    //get user
    const { email, password } = req.body;
    //validate user
    if( !(email && password)) {
      res.status(400).send("all input is required");
    }

    const user = await User.findOne({ email });
    if ( user && ( await bcrypt.compare(password, user.password))){
      const token = jwt.sign(
        { user_id: user._id, email},
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h"
        }
      )
      user.token = token;
      res.status(200).json(user);
    }
    console.log(await User.findOne({email}))
    res.status(400).send("Invalid Credentials")
    

   
  } catch(err) {
    console.log(err);
  }
})



module.exports = taskRoute;


