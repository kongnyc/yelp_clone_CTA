const express = require('express');
require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

const PORT =process.env.PORT;

const yelpStoreRouter = require("./routes/stores/stores")
const userRouter = require("./routes/users/users")
const typeRouter = require("./routes/types/types")

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use((err,req,res,next)=>{
    console.log(err);
    if(err.status){
        res.status(err.status).json(err);
    }else{
        res.status(500).json(err)
    }
})

app.use("/api/yelp/store", yelpStoreRouter);
app.use("/api/yelp/user", userRouter);
app.use("/api/yelp/type", typeRouter);

app.listen(PORT, ()=>{
    console.log("listing to Port " , PORT)
})