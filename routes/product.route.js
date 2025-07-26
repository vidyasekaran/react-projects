import express from "express";
import {
  changeProduct,
  createProduct,
  deleteProduct,
  getProducts,
} from "../controllers/product.controller.js";

const router = express.Router();

router.delete("/:id", deleteProduct);
router.get("/", getProducts);
router.put("/:id", changeProduct);
router.post("/", createProduct);

export default router;
