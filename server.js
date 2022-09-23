const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const mongoose = require('mongoose');
const cors = require("cors");
mongoose.connect("mongodb://umar:khan@cluster0-shard-00-00.mxj00.mongodb.net:27017,cluster0-shard-00-01.mxj00.mongodb.net:27017,cluster0-shard-00-02.mxj00.mongodb.net:27017/ecmmui?ssl=true&replicaSet=atlas-vsqdmj-shard-0&authSource=admin&retryWrites=true&w=majority").
    then(() => { console.log("Ecommerce Database is connected") })
    .catch((e) => { console.log(e + "It's not ok") });
app.use(cors());
app.use(express.json());
app.use("/user", require("./routes/Usersign.js"));
app.use("/product", require("./routes/Product.js"));


const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => {
    console.log("Backend server is running!");
  });