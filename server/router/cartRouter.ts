import express from "express";

const router = express.Router()
import { getBasket, addToBasket} from "../controller/cartController"

router.get("/:id", getBasket)
router.post("/", addToBasket)


export default router;