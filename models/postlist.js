const Archetype = require('archetype-js');

module.exports = new Archetype({
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
}).compile('posts');