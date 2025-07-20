import express from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

const router = express.Router();
const secretKey = "fasdgfasdf23hjaskfsadiu38klasdfbcaiudsh32l0asdfjasgf";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token = jwt.sign({ id: user._id, email: user.email }, secretKey, {
    expiresIn: "1h",
  });

  res.json({ token });
});

export default router;
