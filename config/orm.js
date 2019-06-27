var connection = require("./connection.js");

var orm = {
    selectAll : function(tableName,cb){
        var queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString,function(err,result){
            if(err){
                throw err;  
            }

            cb(result);
        })
    } 
}