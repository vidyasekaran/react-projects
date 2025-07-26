import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "../routes/product.route.js";

const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDB();
  console.log("Server Started at http://localhost:" + PORT);
});
