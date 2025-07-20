import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
});

export const Product = mongoose.model("Product", productSchema);
