'use strict';

const express = require('express');
const app = express();

const validator = require('./middlewares/validator');
const logger = require('./middlewares/logger');

const error404 = require('./handlers/404');
const error500 = require('./handlers/500');

app.use(express.json());

app.use(logger);
app.use(validator);


app.get('/person', (req,res)=>{
    let namePro = req.query.name
    let obj = {
        name : namePro,
    }
res.send(obj)
})

app.get('/badConnection', (req,res,next)=> {
    next('Something WENT WRONG!');
})

app.use('*',  error404);
app.use(error500);










function start(port){
    app.listen(port , ()=>console.log(`Server is listening 0n : ${process.env.PORT}`))
}

module.exports = {
    start,
    server:app
}