import  express  from "express";
import { updatePostPic,addpost,getAllPosts } from "../controller/postController";
const router=express.Router()

router.post("/Profile/Post/:artistId", addpost)

router.get("/getAllPosts/:artistId",getAllPosts)
router.put("/Profile/updatePostPic/:artistId",updatePostPic)


export default router