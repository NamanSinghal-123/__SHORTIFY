import express from "express";
import { CreateUrl, deleteUrl, getAllUrl, getUrl } from "../controllers/shortUrl.js";
const router = express.Router();
router.post("/shortUrl", CreateUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl:id", getUrl);
router.post("/shortUrl:id", deleteUrl);
export default router;
