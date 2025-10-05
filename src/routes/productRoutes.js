const express = require('express');
const { getAllProducts ,addProduct,updateProduct,deleteProduct,getProductById } = require('../controllers/productController');

const productRoutes = express.Router();

// GET /products
productRoutes.get('/', getAllProducts);
// POST /products
productRoutes.post('/', addProduct);
// PUT /products/:id
productRoutes.put('/:id', updateProduct);
// DELETE /products/:id
productRoutes.delete('/:id', deleteProduct);
// GET /products/:id
productRoutes.get('/:id', getProductById);



module.exports = productRoutes;
