const express = require("express");
const Tesseract = require('tesseract.js')

const app = express();


var filename = 'text.png'
  
Tesseract.recognize(filename)
    .catch(err => console.error(err))
    .then(function (result) {
        console.log(result.data.text);
    })

app.get("/", function(req,res){
    res.send("ll");
    console.log('ll')
});

app.listen("3000");