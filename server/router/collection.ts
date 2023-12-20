const express = require('express');
const router = express.Router();
import collection from "../controller/collectionController"

router.get('/all', collection.getall);
router.get('/:col',collection.getone)
router.post('/:add',collection.addcol)

export default router;