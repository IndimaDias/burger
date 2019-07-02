var connection = require("./connection.js");

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
// ******************************************************************************************************
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

var orm = {
    selectAll : function(tableName,cb){
        var queryString = "SELECT * FROM " + tableName + ";";

        connection.query(queryString,function(err,result){
            if(err){
                throw err;  
            }

            cb(result);
        });
    },

    insertOne : function (tableName,colNames,colValues,cb){
        var queryString = "INSERT INTO " + tableName;
        queryString += " ( " + colNames.toString() + " ) ";
        queryString += "VALUES (" + printQuestionMarks(colValues.length) + " ) ";

        console.log(queryString);
        console.log(colValues);
        connection.query(queryString , colValues, function(err,result){
            if(err){
                throw err;
            }

            cb(result);
        });

    },

    updateOne : function(tableName, objectColVals,condition,cb){
        var queryString = "UPDATE " + tableName;
        queryString += "SET ";
        queryString += objToSql(objectColVals);
        queryString += "WHERE";
        queryString += condition;

        connection.query(queryString,function(err,result){
            if(err){
                throw err;
            }

            cb(result);

        });
    }
}

module.exports = orm;