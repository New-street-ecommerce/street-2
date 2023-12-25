import express from "express"
const router = express.Router()
import { postQuestion , getQuestions } from "../controller/questionController"

router.post("/", postQuestion)
router.get("/", getQuestions)

export default router