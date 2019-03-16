var mysql = require('mysql');

var db = {};

db.query = function sqlback(sqllan,param,fn){
    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '123',
        port : '9090'
    });

    connection.connect(function(err){
        if(err){
            console.log(err);
            return;
        }
    });

    if(!sqllan) return;


    connection.query(sqllan, [param],function(err, data, fields){
        if(err){
            console.log(err);
            return;
        }
        fn(data);
    });



    connection.end(function(err){
        if(err){
            return;
        }else{
            console.log('yesdb');
        }
    });
};

module.exports = db;