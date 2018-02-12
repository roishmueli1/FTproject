var workoutName, isDone ,workoutDate;

function getWorkoutId() {
    var aKeyValue = window.location.search.substring(1).split('&'),
        workoutId = aKeyValue[0].split("=")[1];
    console.log(workoutId);
    return workoutId;
}

$(document).ready(function () {
    $.getJSON('../../data/workouts.json', function (data) {
        var workoutId = getWorkoutId();

        $.each(data.kindOfWorkout, function (i, obj) {
            if(obj.id == workoutId){
                workoutName = obj.name;
                isDone = obj.isDone;
                //workoutDate = obj.date;

            }
        });
        //$('#workoutDate').html(date);
        //$('h1').html(workoutName);
        $('#isDone').html(isDone);

    })
})