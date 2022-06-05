require('dotenv').config()
const cors = require('cors');
const express =require('express');

const mongoose = require('mongoose');
const mongodbconn = process.env.DATABASE_URL;

mongoose.connect(mongodbconn);
const database = mongoose.connection;

database.on('error',()=>{
    console.log('something went wrong')
})
database.once('connected',()=>{
    console.log('database connected')
})
const app = express();
app.use(cors())
app.use(express.json())

const routes = require('./Routes/route');

app.use('/api', routes)

app.listen(3001,()=>{
  console.log(`App started at ${3001}`)
})