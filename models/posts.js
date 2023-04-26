const mongoose = require("mongoose");                       //import mongoose

const postSchema = new mongoose.Schema({                    //intialize mongoose schema

    topic:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    postCategory:
    {
        type:String,
        required:true
    },

    
});

module.exports = mongoose.model('Post',postSchema);