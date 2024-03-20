require('dotenv').config();
const express = require("express")
const bodyparse = require("body-parser")
const mongoose = require("mongoose")

const route = require("./src/routes/route")

const app = express()
app.use(bodyparse.json())
app.use(bodyparse.urlencoded({extended:true}))

const baseUri = process.env.BASE_URI;

mongoose
  .connect(
    baseUri,
   
  )
  .then(() => console.log("MongoDB Is Connected"))
  .catch((err) => console.log(err));

  app.use("/",route)

 // Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });


  app.listen(process.env.PORT || 3000, function () {
    console.log("express app running on port " + (process.env.PORT || 3000));
  });