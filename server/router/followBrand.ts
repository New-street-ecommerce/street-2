import express from "express";
import {followBrand} from "../controller/followBrandController"
const router = express.Router()

router.post("/:brandId/userId",followBrand)

export default router