import  express  from "express";
import { addpost,getAllPosts } from "../controller/postController";
const router=express.Router()

router.post("/Profile/Post/:artistId", addpost)

router.get("/getAllPosts/:artistId",getAllPosts)



export default router