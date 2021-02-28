const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 80;

mongoose.connect("mongodb://localhost:27017/bookstore" , {useNewUrlParser: true , useUnifiedTopology: true})
.then(() => console.log("Connection sucessful...."))
.catch(err => console.log(err))


app.listen(port , () => console.log(`listening to port : ${port}`))