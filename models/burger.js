// importing orm js 
var orm  = require("../config/orm.js");

var burger = {
    selectAll : function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne : function(colNames,colValues,cb){
        orm.insertOne("burgers",colNames,colValues,function(res){
            cb(res);
        });

    },

    updateOne : function(colVals,condition,cb){
        orm.updateOne("burgers",colVals,condition,function(res){
            cb(res);
        });
    },

    deleteOne : function(condition,cb){
        
        orm.deleteOne("burgers",condition,function(res){
            cb(res);
        });
    }

}

module.exports = burger;