import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

//Sign Up Controller
export const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt); //hashing password before saving the user
    const newUser = new User({ ...req.body, password: hash });
    await newUser.save();
    res.status(200).send("User created");
  } catch (err) {
    next(err);
  }
};

//Sign In Controller
export const signin = async (req, res, next) => {
  try {
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = await bcrypt.compare(req.body.password, user.password);

    if (!isCorrect) return next(createError(400, "Wrong Credentials!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT); //generating access token
    const { password, ...others } = user._doc; //removing user password from response json
    res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .status(200)
      .json(others);
  } catch (err) {
    next(err);
  }
};
