import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());

await mongoose.connect("mongodb://localhost:27017/rest_api");

app.use("/users", userRoutes);
app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`API server running on http://localhost:${port}`);
});
