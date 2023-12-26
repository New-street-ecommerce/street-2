import express from 'express'
const router = express.Router()
import {signIn,signUp,deleteAccount} from "../controller/userController"

router.post("/signup",signUp)
router.post("/signin",signIn)
router.delete("/:id",deleteAccount)




export default router