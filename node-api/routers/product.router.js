const express = require("express");
const productController  = require("../controllers/product.controller");
const router = express.Router();
const checkAuth = require('../middlewares/check-auth');
router.post("/",productController.createProduct)
router.get("/",productController.getAllProduct)
router.patch("/:_id",productController.updateproduct)
router.delete("/:_id",productController.deleteProduct)
module.exports= router;

