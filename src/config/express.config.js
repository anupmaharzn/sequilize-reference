const express = require('express')
const app = express();
require('dotenv').config();
app.use(express.json());

const api =process.env.API_URL;

const userRoutes = require('../routes/user.Routes');
//routes
app.use(`/user`,userRoutes);

module.exports = app;


