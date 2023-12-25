import  express  from "express";
import { addComment, getAllComments } from "../controller/commentController";
const router=express.Router()

router.post('/:userId/:postId',addComment)
router.get('/getall/:postId', getAllComments)

export default router