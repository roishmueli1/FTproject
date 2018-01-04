// var numOfRect=4;
var numOfRectTitle=6;
var titleIndex = ["Create new workout", "Join workout", "My history", "My schedule"];
var titleFind = ["Runnig", "Jogging", "Trx", "Aerobic", "Cycling", "Give all"];
var titleList = ["Trx", "Running", "Cycling", "Aerobic"];

var loadRec = function(numOfRect, title){
    var recsFind = document.getElementById("recsFind");
    var main=document.getElementById("rect");
    var recsList = document.getElementById("recsList");
        for (var i=0; i<numOfRect; i++)
        {
            if (title=="titleIndex") {

                var newRec=createRecIndex();
                main.appendChild(newRec);
                console.log(newRec);
                var recTitle=document.getElementsByTagName("a");
                recTitle[i].appendChild(document.createTextNode(titleIndex[i]));
                recTitle[0].setAttribute("href", "CreateNew/createNew.html");
                recTitle[1].setAttribute("href", "JoinWorkout/find.html");
                recTitle[2].setAttribute("href", "#");
                recTitle[3].setAttribute("href", "#");

            } else if(title=="titleFind") {
                var newRec = createRecFind();
                recsFind.appendChild(newRec);
                console.log(newRec);
                var recTitle = document.getElementsByTagName("a");
                recTitle[i].appendChild(document.createTextNode(titleFind[i]));
                recTitle[i].setAttribute("href", "#");

            } else if(title=="titleList") {
                var newRec=createRecList();
                recsList.appendChild(newRec);
                console.log(newRec);
                var recTitle=document.getElementsByTagName("a");
                recTitle[i].appendChild(document.createTextNode(titleList[i]));
                recTitle[i].setAttribute("href", "#");
            }
            console.log(recTitle);
        }

}

function createRecIndex() {
    var newObj = document.createElement("section");
    newObj.className = "rectangles";
    var newElemP = document.createElement("a");
    newObj.appendChild(newElemP);
    return newObj;
}
function createRecFind() {
    var newObj = document.createElement("section");
    newObj.className = "rectangles";
    var newElemP = document.createElement("a");
    newObj.appendChild(newElemP);
    newObj.onclick = function () {
        if (newObj.style.backgroundColor == "lightgreen")
        {
            newObj.style.backgroundColor = "#e6e6e6 ";
            newElemP.style.fontFamily = 'Boogaloo', cursive;
        }
        else
            newObj.style.backgroundColor = "lightgreen";
            newElemP.style.fontFamily = "'Bangers', cursive";
    };
    return newObj;
}
function createRecList() {
    var newObj = document.createElement("section");
    newObj.className = "rectangles";
    var newElemP = document.createElement("a");
    newObj.appendChild(newElemP);
    var newElemTime = document.createElement("p");
    newObj.appendChild((newElemTime));
    var newElemLevel = document.createElement("p");
    newObj.appendChild((newElemLevel));
    newElemTime.innerHTML="Time"
    newElemLevel.innerHTML="Level"
    var newIcon = document.createElement("img");
    newElemP.appendChild(newIcon);
    newIcon.src="../images/iconDetails.png";
    newIcon.setAttribute("height", "15");
    newIcon.setAttribute("width", "15");


    $("document").ready(function () {

        $("img").click(function () {
            $("#rect").parent().append($("#box"));
            $("#box").fadeIn();

        });

        
    });

    $("document").ready(function () {

        $("#closeButton").click(function () {
            $("#rect").parent().append($("#box"));
            $("#box").fadeOut();

        });


    });

    newObj.onclick = function () {
        if (newObj.style.backgroundColor == "lightgreen")
            newObj.style.backgroundColor = "white";
        else
            newObj.style.backgroundColor = "lightgreen";
    };
    return newObj;

}
function nextPage(numOfPage){
    if (numOfPage==1){
        window.location='list.html';
    }else{
        window.location='yourWorkout.html';
    }
}


