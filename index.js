var express = require('express');
var app = express();
app.set('view-engine', 'pug');

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
    var item1 = {
        nombre_producto : "Leche LALA",
        id_producto : 1,
        cantidad_existencia : 250,
        precio : 15.25
    };
    productos.push(item1);
    res.json(productos);
})

app.listen(3000, function(){
    console.log('localhost:3000');
})