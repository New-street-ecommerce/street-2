import  express  from "express";
import { addpost,updateName,updateBio,updatePfp,updateCoverPic,signIn,getAllPosts } from "../controller/artistController";
const router=express.Router()

router.post("/Profile/Post/:artistId",addpost)
router.put("/Profile/updateName/:artistId",updateName)
router.put("/Profile/updateBio/:artistId",updateBio)
router.put("/Profile/updatePfp/:artistId",updatePfp)
router.put("/Profile/updateCoverPic/:artistId",updateCoverPic)
// router.post("/signUp",signUp)
router.post("/signIn",signIn)
router.get("/getAllPosts/:artistId",getAllPosts)


export default router
