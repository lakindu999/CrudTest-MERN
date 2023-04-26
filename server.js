const express = require("express");                         //import express
const mongoose = require("mongoose");                       //import mongoose
const bodyParser = require('body-parser');                  //this is the package that need to convert HTTP Req . to JSON

const app = express();                                      //invoke express

app.use(bodyParser.json());                                 //app midleware

const postRoutes = require('./routes/posts');               //import routes

const PORT = 8000                                           //defining the port

app.use(postRoutes);                                        //rout middleware

const DB_URL ='mongodb+srv://root:laki@mernapp.fkcgfrj.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL)                                    //connect to database
.then(() => {
    console.log('DB Connected');
})
.catch((err) => console.log('DB Connection error',err) )

app.listen(PORT, () => {                                    //listen the application to run on pot 8000
    console.log(`App is Running on ${PORT}`);
});

