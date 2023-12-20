import express from "express";
import { createBrand , getBrands } from "../controller/brandController";
const router = express.Router();

router.post("/brands", createBrand)
router.get("/brands", getBrands)






export default router;