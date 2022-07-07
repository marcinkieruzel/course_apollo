// const express = require("express"); common.js
import express from 'express'


const app = express()

//Middleware
app.use(function(req, res, next){

    console.log(req.headers)
    next();

})

//Route
app.get("/", function(req, res) {
    res.json({
        name: "Marcin", 
        lastName: "Kieruzel"
    })
});


app.listen(4000, function(){
    console.log("Server działa");
})

