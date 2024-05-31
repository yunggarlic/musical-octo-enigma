import { Router } from "express";
import { fetchGeocodeData } from "../controllers/geocodeController";

const router = Router();
router.get("/", fetchGeocodeData);

export default router;
