const express = require('express');
const connectDB = require("./src/db");
require("dotenv").config();


//Connect to the database
connectDB();

const app = express();

//Bodyparser Middleware
app.use(express.json());


//User Routes
app.use('/user', require('./src/routes/user_route'));
app.use('/auth', require('./src/routes/auths'));


const PORT = process.env.PORT || 5000;
 



app.listen(PORT, ()=> console.log(`server run on port ${PORT}`))