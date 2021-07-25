const express = require("express");
const router = express.Router();
const sinupRouter = require("./signup.router")
const loginRouter = require("./login.router")
const userRouter = require("./product.router")

router.use('/signup',sinupRouter)
router.use('/login',loginRouter)
router.use("/forgetPassword",forgetPasswordRouter)
router.use("/product",userRouter)

module.exports=router