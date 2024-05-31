import { Router } from "express";
import { fetchWeatherData } from "../controllers/weatherController";

const router = Router();
router.get("/", fetchWeatherData);

export default router;
