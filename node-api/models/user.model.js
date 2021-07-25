const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    Name: {
        type: String,
        reqired: true
    },
   
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    creationTs: {
        type: Date,
        required: true
    },
    updatedOn: {
        type: Date,
        
    }
});

module.exports = mongoose.model('userss', userSchema)


