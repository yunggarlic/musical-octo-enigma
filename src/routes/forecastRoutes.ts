import { Router } from "express";
import { fetchForecastData } from "../controllers/forecastController";

const router = Router();
router.get("/", fetchForecastData);

export default router;
