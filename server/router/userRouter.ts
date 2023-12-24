import express from 'express'
const router = express.Router()
import {signIn} from "../controller/userController"

// router.post("/signup",signUp)
router.post("/signin",signIn)




export default router