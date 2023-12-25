import express from "express";
import {followArtist,unfollowArtist} from "../controller/followUserController"
const router = express.Router()

router.put("/unfollow/:artistId/:userId",unfollowArtist)
router.put("/:artistId/:userId",followArtist)

export default router