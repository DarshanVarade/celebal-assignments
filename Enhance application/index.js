import express from "express";
import fileRoutes from "./routes/fileRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import externalApiRoutes from "./routes/externalApiRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/files", fileRoutes);
app.use("/users", userRoutes);
app.use("/external", externalApiRoutes);

// Global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
