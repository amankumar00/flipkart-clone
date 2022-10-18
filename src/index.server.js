const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');

// routes
const authRoutes = require('./routes/auth')

env.config();

// https://www.youtube.com/watch?v=kXfRQ0NiyLI&list=PLB_Wd4-5SGAYsxD4JGaVdXll3PnoyI-AM&index=3&ab_channel=RizwanKhan

// mongo connection
// mongodb+srv://root:<password>@cluster0.ynbz1u8.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ynbz1u8.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
    ).then(()=>{
    console.log("database connected");
});
app.use(bodyParser());


app.use('/api', authRoutes);


app.listen(process.env.PORT, ()=>{
    console.log('server started on port '+ process.env.PORT);
});