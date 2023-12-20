import express from "express";
import { createBrand , getBrands } from "../controller/brandController";
const router = express.Router();

router.post("/", createBrand)
router.get("/", getBrands)






export default router;