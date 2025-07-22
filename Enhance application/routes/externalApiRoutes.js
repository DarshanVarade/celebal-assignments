import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/random-user", async (req, res, next) => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    res.json(response.data);
  } catch (err) {
    next(err);
  }
});

export default router;
