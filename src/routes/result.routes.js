import express from "express";
import {
  getAllResult,
  getResultbyId,
  result,
} from "../controllers/result.controller";
import { authMiddleware, checkAdmin } from "../middlewares/auth.middleware";

const router = express.Router();

//get result by id
router.get("/result/:id", authMiddleware, getResultbyId);



router.post("/result", authMiddleware, checkAdmin, result);
