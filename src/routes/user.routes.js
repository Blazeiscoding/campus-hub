import express from "express";
import { login, logout, me, register } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);
authRoutes.post("/logout", authMiddleware, logout);
authRoutes.get("/me", authMiddleware, me);
