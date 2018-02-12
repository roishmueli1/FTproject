$(document).ready(function () {
    $.getJSON("../../data/workouts.json", function (data) {
        // $("h2").html(data.category);
        $("#workout-list").append("<ul>");
        $("#workout-list").css({"margin-bottom": "56px"});
        $.each(data.kindOfWorkout, function () {
            $('#workout-list ul').append("<li class='historyList'><a href='workout.html?workoutId="
                +this.id +"'>"
                +this.name+ " " + "<br>"
                +this.date+"</a></li>").append("<p class='historyLine'>").append
                ("<img src=../../images/iconDetails.png style='width: 15px; height: 15px'>")
        });
        console.log(data);
    });
});