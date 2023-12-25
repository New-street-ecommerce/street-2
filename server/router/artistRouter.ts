
import  express  from "express";
import {signUp,updatePfp,updateCoverPic,signIn,updateProfil} from "../controller/artistController";
const router=express.Router()



router.put("/Profile/updateProfil/:artistId",updateProfil)
router.put("/Profile/updatePfp/:artistId",updatePfp)
router.put("/Profile/updateCoverPic/:artistId",updateCoverPic)
router.post("/signUp",signUp)
router.post("/signIn",signIn)



export default router
