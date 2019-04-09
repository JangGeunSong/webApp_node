const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let PostSchema = new Schema({
    num : {
        type : Number,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    writer : {
        type : String,
        required : true
    },
    hit : {
        type : Number,
        required : true
    }
});

module.exports = PostSchema = mongoose.model('postlist', PostSchema);