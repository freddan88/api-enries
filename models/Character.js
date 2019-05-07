const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const characterSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    species:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: false
    },
    gender:{
        type: String,
        required: false
    }
})

module.exports = model('Character', characterSchema);