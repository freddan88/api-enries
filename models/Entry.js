const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const entrySchema = new Schema({

    likes: { type: Number, default: 0, trim: true },

    added: { type: Date, default: Date.now },

    name:{
        type: String,
        required: true
    },

    youtubeId:{
        type: String,
        required: true
    },

    comment:{
        type: String,
        required: false
    }
})

module.exports = model('Entry', entrySchema);
