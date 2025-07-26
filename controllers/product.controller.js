import Product from "../models/product.js";
import mongoose from "mongoose";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in Fetching products");
    res.status(200).json({ success: false, message: "Products not found" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "InValid Product id" });
  }

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "product deleted" });
  } catch (error) {
    console.log("Error in deleteProduct");
    res
      .status(400)
      .json({ success: false, message: "Unable to delete Product" });
  }
};

export const changeProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.log("Error updating a product");
    res.status(200).json({ success: false, message: "Product is updated" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  console.log("Received", product);

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ sucess: false, message: "Please provide all details" });
  }

  const newproduct = new Product(product);
  try {
    await newproduct.save();
    res.status(201).json({ success: true, data: newproduct });
  } catch (error) {
    console.log("Error in Creating product:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
