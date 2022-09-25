const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const db = require('./config/Database.js');
const router = require('./routes/index.js');
// import express from "express";
dotenv.config();


const app = express();
 
app.use(cors({ credentials:true, origin:true }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
 
app.listen(5000, ()=> console.log('Server running at port 5000'));