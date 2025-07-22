import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json([{ name: "Darshan" }, { name: "John" }]);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id !== "1") throw new Error("User not found");
  res.json({ id, name: "Darshan" });
});

export default router;
