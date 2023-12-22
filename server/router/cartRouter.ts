import express from "express";

const router = express.Router()
import { getBasket, addToBasket, removeFromBasket} from "../controller/cartController"

router.get("/:id", getBasket)
router.post("/", addToBasket)
router.delete("/:id",removeFromBasket)



export default router;