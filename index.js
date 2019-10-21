var express = require('express');
var app = express();
var Sequelize = require('sequelize');
app.set('view-engine', 'pug');

const models = require('./models');
const Op = models.Sequelize.Op;

app.get('/',function(req, res){
    //res.send('Hello world');
    var test = {
        nombre : "IDS",
        campus : "VHSA"
    };
    res.json(test);
})

app.get('/listproducts',function(req, res){
    var productos = [];
    /*
    var item1 = {
        nombre_producto : "Leche LALA",
        id_producto : 1,
        cantidad_existencia : 250,
        precio : 15.25
    };
    productos.push(item1);
    */
    models.Products.findAll().then(function(data){
        var info = {
            'status':'success',
            'data':data
        }
        res.json(info);
    });
});

app.listen(3000, function(){
    console.log('localhost:3000');
});