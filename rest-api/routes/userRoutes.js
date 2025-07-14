import express from "express";
import { User } from "../models/user.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const user = new User(req.body);
  const saved = await user.save();
  res.json(saved);
});

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.put("/:id", async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  const deleted = await User.findByIdAndDelete(req.params.id);
  res.json(deleted);
});

export default router;
