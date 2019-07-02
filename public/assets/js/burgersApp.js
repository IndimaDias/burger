

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

    $(".btnDevour").on("click",function(event){
        var id = $(this).data("id");
        var  newState = 1;

        var devouredBurger = {
            devoured : newState
        };

        $.ajax("/api/burgers/"+id, {
            type : "PUT",
            data :devouredBurger
        }).then(
            function(){
                console.log("burger devoured");
                location.reload();
            });
    });
});