// import npm mysql package 
var mysql = require ("mysql");

// create a connection to the database

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "unhdb1",
    database: "burgers_db"
});
}

// connect to the database
connection.connect(function(err){
    if(err){
        console.log("Error connecting " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

// export the connection to be used by the orm
module.exports = connection;