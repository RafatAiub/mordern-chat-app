import express from "express";
import { login, signup, signout } from "../controllers/auth.controllers.js";
const router = express.Router();

router.get("/signup", signup);

router.get("/login", login);

router.get("/signout", signout);

export default router;
