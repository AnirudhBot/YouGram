import express from "express";
import { signup, signin } from "../controllers/auth.js";

const router = express.Router();

//Sign Up
router.post("/signup", signup);

//Sign In
router.post("/signin", signin);

//Google Auth
router.post("/google");

export default router;
