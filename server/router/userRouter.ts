import express from 'express'
const router = express.Router()
import {signup} from "../controller/userController"

router.post("/signup/:role",signup)




export default router