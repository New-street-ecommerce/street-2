import express from "express";
import {followBrand,unfollowBrand} from "../controller/followBrandController"
const router = express.Router()

router.put("unfollow/:brandId/:userId",unfollowBrand)
router.put("/:brandId/:userId",followBrand)

export default router