import "dotenv/config";
import express from "express";
import path from "path";
import cors from "cors";

import { weatherRouter, geolocationRouter } from "./routes";

const app = express();
const port = process.env.PORT || 1902;

app.use(cors());
app.use(express.json());

app.use("/api/weather", weatherRouter);
app.use("/api/geolocation", geolocationRouter);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend/dist/index.html"));
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
