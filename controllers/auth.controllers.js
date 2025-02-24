/* eslint-disable no-unused-vars */
import mongoose from "mongoose";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRES_IN, JWT_SECRET } from "../env.js";

export const signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("User already exists");
      error.status = 409;
      throw error;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: {
        user: newUser,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signIn = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email})
        if (user){
            let passwordValid = await bcrypt.compare(password, user.password)
            if (passwordValid){
                let token = jwt.sign({userId: user._id}, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN})
                res.status(200).json(
                    {
                        success: true,
                        message: "sign in succesful",
                        data: {
                            token,
                            user
                        }
                    }
                )
            }else{
                let error = new Error("Invalid Password");
                error.status = 401;
                throw error;
            }
        }else{
            let error = new Error("No such email in the database")
            error.status = 401;
            throw error; 
        }
    } catch (error) {
        next(error)
    }
};

export const signOut = async (req, res, next) => {};


// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2N2JiNWQ0MTEyNDc5OWQ5ZmJmNDczYmUiLCJpYXQiOjE3NDAzMzIzNTMsImV4cCI6MTc0MDQxODc1M30.4nv4O9jlOg7IPJRYg3AOwoy2Q7AoHBCDAi2Dz70Raxo";
// "67bb5d41124799d9fbf473be";