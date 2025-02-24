/* eslint-disable no-unused-vars */
import User from "../models/user.model.js";

/**
 * Get all users. 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const getUsers = async (req, res, next) => {
  try {
    // get all the users.
    const users = await User.find();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a single user based on its ID. 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const getUser = async (req, res, next) => {
  try {
    // get all the users.
    const user = await User.findById(req.params.id)
                            .select('-password');

    if (!user){
        let error = new Error("User does not exist");
        error.status = 404;
        throw error;
    }                    

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};