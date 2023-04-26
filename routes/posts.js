const express = require("express");                         //import express
const Posts = require('../models/posts');                   //import post model

const router = express.Router();

//Save Post

router.post('/post/save',(req,res)=>{

    let newPost = new Posts(req.body);

    newPost.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved Successfully"
        });
    });
});

module.exports = router;
