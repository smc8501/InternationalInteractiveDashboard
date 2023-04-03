const express = require('express');
const {json, urlencoded} = express;
const dotenv = require('dotenv').config();
const app = express();
const {mongoose} = require('mongoose');
const expressValidator = require("express-validator");

//middleware
app.use(json());
app.use(urlencoded({extneded: false}));
app.use(expressValidator());

// routes

const userRoutes = require('./routes/user.js')
app.use("/", userRoutes);

// db
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DB connected"))
.catch((err) => console.log("DB not connected"))

//The port that the server is listening to
app.listen(process.env.PORT, () => {console.log("Server started on port 4000")})
