import express from "express";
import { addFood } from "../controllers/food.js";

const router = express.Router();

router.get("/", addFood)

export default router;
