const express = require("express");
const productController  = require("../controllers/product.controller");
const router = express.Router();
const checkAuth = require('../middlewares/check-auth');
router.post("/",checkAuth,productController.createProduct)
router.get("/",checkAuth,productController.getAllProduct)
router.patch("/:_id",checkAuth,productController.updateproduct)
router.delete("/:_id",checkAuth,productController.deleteProduct)
module.exports= router;

