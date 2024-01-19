import express from "express";
import {
  addCategory,
  getAllCategories,
} from "../controllers/category.controller.js";

const router = express.Router();

router.get("/", getAllCategories);
router.post("/add", addCategory);

export default router;
