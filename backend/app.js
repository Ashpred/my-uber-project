const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const cookieparser= require('cookie-parser')
app.use(cookieparser())
const connectToDb = require('./db/db')
connectToDb();
const userRoutes = require('./routes/user.routes')

app.get('/', (req,res) =>{
    res.send("HI");
})
app.use('/users', userRoutes);
module.exports = app;