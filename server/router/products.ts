import express from 'express';
import product from "../controller/productController"

const router = express.Router();

router.get('/all', product.getall);

router.get('/:catg', product.getCat);

router.get('/:coll', product.getCol); // Assuming getCollec is a function in your product

router.get('/:brand', product.getbrand);

router.get('/:minPrice/:maxPrice', product.filterbyPrice);

router.post('/:add', product.addProduct);

export default router;