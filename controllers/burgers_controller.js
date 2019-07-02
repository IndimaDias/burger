var express = require("express");

// import bugers in models 
var burger = require("../models/burger.js");

// create a router
var router = express.Router();

// create routers for the app

router.get("/",function(req,res){
    burger.selectAll(function(data){
        var burgerObj = {burgers : data};
        console.log(burgerObj);
        res.render("index",burgerObj);
    });
});

router.post("/api/burgers",function(req,res){
    burger.insertOne(
        ["burger_name","devoured"],
        [req.body.name,req.body.devoured],
        function(result){
            res.json({id : result.id});
        });
});


router.put("/api/burgers/:id",function(req,res){
    var condition = "id = " + req.params.id;

    burger.updateOne({devoured:req.body.devoured }, condition,function(result){
        if(result.changedRows == 0 ){
            return res.status(404).end()

            }
            else{
                res.status(200).end();
            }
        });
    });

module.exports = router;