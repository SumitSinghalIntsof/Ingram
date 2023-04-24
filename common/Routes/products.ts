import express from 'express';
import controller from '../Controllers/ProductController';
const router = express.Router();
const products = require("../Controllers/ProductController")
router.get('/products', controller.getproducts);
router.get('/posts/:id', controller.getproduct);
router.put('/posts/:id', controller.updateproduct);
router.delete('/posts/:id', controller.deleteproduct);
router.post('/posts', controller.addproduct);

export = router;