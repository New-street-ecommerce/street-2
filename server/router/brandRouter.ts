import express from "express";
import { createBrand } from "../controller/brandController";
const router = express.Router();

router.post("/brands", createBrand)






export default router;