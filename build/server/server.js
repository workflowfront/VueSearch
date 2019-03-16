var express = require('express');
var mysql = require('./db.js');
var queryString = require('querystring');
var bodyParser = require('body-parser');
var app=express();
let cors = require('cors');


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST']
}))

mysql.query('CREATE DATABASE IF NOT EXISTS test', function (err) {
    if (err) throw err;
    connection.query('USE test', function (err) {
        if (err) throw err;
        connection.query('CREATE TABLE IF NOT EXISTS mytablel('
            + 'description VARCHAR(30),'
            + 'id INT NOT NULL AUTO_INCREMENT,'
            + 'PRIMARY KEY(id),'
            + 'price INT NOT NULL ,'
            + 'quantity INT NOT NULL ,'
            + 'thumbnail_url VARCHAR(70) ,'
            + 'title VARCHAR(30)'
            +  ')', function (err) {
            if (err) throw err;
        });
    });
});
mysql.query("INSERT INTO mytablel(description,id,price,quantity,thumbnail_url,title) " +
    "VALUES(3.0GHz Dual-core Haswell ,1,price,quantity,thumbnail_url,title)");

app.use(bodyParser.urlencoded({extenden:false}));
// app.use(bodyParser.json())

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/get', function(req, res){
    mysql.query('SELECT * from mytablel',req, function(data){
        res.status(200);
        res.json(data);
       console.log('1'+data);
    });
});

app.use('/setdata', function(req, res){
    var data = req.body;
    console.log(data);

    data = queryString.stringify(data).split('&');
    var arr = [];
    for(var i=0; i<data.length; i++){
        data[i] = decodeURI(data[i]);
        var index = data[i].indexOf('=');
        arr.push(data[i].slice(index+1));
    }

    mysql.query("INSERT INTO mytablel(description,id,price,quantity,thumbnail_url,title) VALUES ?",[arr],function(result){
        res.status(200);
        res.json(result);
    });
});
app.listen(9090);