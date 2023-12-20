import express from "express";

const router = express.Router()
import { getBasket, addToBasket} from "../controller/cartController"

router.get("/basket/:id", getBasket)
router.post("/basket", addToBasket)


export default router;