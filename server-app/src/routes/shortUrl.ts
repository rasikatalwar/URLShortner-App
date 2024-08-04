import express from "express";
import { CreateUrl, deleteUrl, getAllUrl, getUrl } from "../controllers/shortUrl";

const router=express.Router();

router.post("/shortUrl", CreateUrl);
router.get("/shortUrl", getAllUrl);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;