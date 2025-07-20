import jwt from "jsonwebtoken";

const secretKey = "fasdgfasdf23hjaskfsadiu38klasdfbcaiudsh32l0asdfjasgf";

export function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ message: "Access denied. No token." });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
}
