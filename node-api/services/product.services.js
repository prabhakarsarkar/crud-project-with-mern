const productCollection = require("../models/product.model")
const get = (condition)=>productCollection.find(condition)
const findOne = condition=>productCollection.findOne(condition)
const post = payload=> productCollection.create(payload)
const updateAllField=(condition,payload)=> productCollection.findByIdAndUpdate(condition,payload)
const deleteProduct=(condition)=> productCollection.findByIdAndDelete(condition)
module.exports={
    get,
    findOne,
    post,
    updateAllField,
    deleteProduct,
}