import  express  from "express";
import { addpost,updatePfp,updateCoverPic,signUp,signIn,getAllPosts,updateProfil } from "../controller/artistController";
const router=express.Router()

router.post("/Profile/Post/:artistId",addpost)
router.put("/Profile/updateProfil/:artistId",updateProfil)
router.put("/Profile/updatePfp/:artistId",updatePfp)
router.put("/Profile/updateCoverPic/:artistId",updateCoverPic)
router.post("/signUp",signUp)
router.post("/signIn",signIn)
router.get("/getAllPosts/:artistId",getAllPosts)


export default router
