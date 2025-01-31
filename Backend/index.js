const express = require ("express");
const app= express();
const bodyParser = require("body-parser");
const cors = require("cors");
require('dotenv').config();
require("./Models/db");
const PORT=process.env.PORT|| 8080;
const Authrouter = require("./Routes/AuthRouter")
const ProductRouter = require("./Routes/ProductRouter")

app.get('/ping',(req,res)=>{
    res.send("pong");
})    

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',Authrouter); 
app.use("/products",ProductRouter); 

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})    