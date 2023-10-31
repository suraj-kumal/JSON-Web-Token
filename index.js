const express = require("express")
const app = express();
const notFound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/error-handler");
require('dotenv').config();
require('express-async-errors');
const mainRouter = require('./routes/main');
//middleware
app.use(express.json());
app.use(express.static("./public"));

//routes
app.use('/api/v1/',mainRouter);
app.use(notFound);
app.use(errorHandlerMiddleware);




const PORT = process.env.PORT || 5000;
const start = async () =>{
    try {
        app.listen(PORT,()=>{
            console.log(`server is listening at ${PORT}`);
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
start();
