const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');

env.config();

// mongo connection
// mongodb+srv://root:<password>@cluster0.ynbz1u8.mongodb.net/?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ynbz1u8.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`
    ).then(()=>{
    console.log("database connected");
});
app.use(bodyParser());

app.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Hello from server'
    });
});

app.post('/data', (req, res, next)=>{
    res.status(200).json({
        message: req.body
    });
});



app.listen(process.env.PORT, ()=>{
    console.log('server started on port '+ process.env.PORT);
});