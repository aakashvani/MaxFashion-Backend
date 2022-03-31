const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true,unique: true},
    mobile: { type: Number, required: true},
    password: { type: String, required: true}

},{
    versionKey: false,
})

module.exports = mongoose.model('user',signupSchema) ;