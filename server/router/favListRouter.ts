import express from "express"
import { addToFavList , getProducts ,deleteProduct} from "../controller/favListController"

const router = express.Router()
router.post("/", addToFavList)
router.get("/:id", getProducts)
router.delete("/:id",deleteProduct )

export default router