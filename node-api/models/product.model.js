
const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productName: {
        type: String,
        reqired: true
    },
    Quantity: {
        type: Number,
        
    },
    creationTs: {
        type: Date,
        required: true
    },
    updatedOn: {
        type: Date,
        
    }

});

module.exports = mongoose.model('productss', productSchema)


