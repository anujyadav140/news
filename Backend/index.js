const express = require('express');
const app = express();
const port = 4000;
const authRoutes = require("./Routes/auth")
const dotenv = require('dotenv');
var mongoose = require('mongoose');
var mongoDB = 'mongodb://127.0.0.1/arete';

dotenv.config()

mongoose.connect(mongoDB,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex:true}).then(()=>console.log("Connection successful")).catch((err)=>console.log(err));

app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.header("Access-Control-Allow-Methods","*")
  next();
});

app.use(authRoutes)

app.get('/', (req, res) => {
    res.json({"arete" : "arete"})
  });

app.listen(port, () => {
    console.log(`Arete API should be up and running on ${port}`)
  });