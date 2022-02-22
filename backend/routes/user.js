const express = require('express');
const taskRoute = express.Router();
const bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");
//const jwt = require("jsonwebtoken");

const registerSchema = Joi.object({
    first_name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    last_name: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  
  const loginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });

let User = require('../models/user');

taskRoute.post("/register", async (req, res) => {
    const { error } = registerSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    //Check if the user is allready in the db
    const emailExists = await User.findOne({ email: req.body.email });
  
    if (emailExists) return res.status(400).send("Email allready exists");
  
    //hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);
  
    //create new user
    const user =  await new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashPassword,
    });
  
    try {
      const savedUser = await user.save();
      res.send(savedUser);
    } catch (err) {
      res.status(400).send(err);
    }
  });

  taskRoute.post("/login", async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    const user = await User.findOne({ email: req.body.email });
  
    if (!user) return res.status(400).send("Email or password is wrong");
  
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Email or password is wrong");
  
    //Create and assign a token
    const token = jwt.sign({ user_id: user._id }, process.env.TOKEN_SECRET, { expiresIn: "2h"});
    res.header("auth-token", token).send(token);
  });

module.exports = taskRoute;


