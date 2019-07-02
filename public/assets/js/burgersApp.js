$(function(){
    $(".create-form").on("submit",function(event){
        event.preventDefault();
        var newBurger = {
            name: $("#name").val().trim(),
            devoured : 0
        };

        $.ajax("api/burgers", {
            type : "POST",
            data : newBurger
        }).then(function(){
            console.log("New Burger created");
            location.reload();
        });
    });
});