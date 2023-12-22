import express from 'express';
import product from "../controller/productController"

const router = express.Router();

router.get('/all', product.getAll);

// router.get('/:catg', product.getCat);

router.get('/New', product.getNew); 



router.get('/:minprice/:maxprice', product.filterbyPrice);

router.post('/add', product.addProduct);

export default router;