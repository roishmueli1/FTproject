// var numOfRect=4;
var numOfRectTitle=6;
var titleIndex = ["Create new workout", "Join workout", "V.I.P", "Results"];
var titleFind = ["Runnig", "Jogging", "Trx", "Aerobic", "Cycling", "Give all"];
var titleList = ["Trx", "Running", "Cycling", "Aerobic"];
var titleSpecialFeb = ["Half marathon", "Trail run", "Open water swimming", "Mountain bike"];
var februaryDate = ["5.2.2018", "10.2.2018", "13.2.2018", "17.2.2018"];
var februaryKm = ["19km", "20km", "30km", "40km"];
var titleSpecialMarch = ["Steeplechase run", "Road bicycle racing", "Crosfit", "Weight training"];
var marchDate = ["15.3.2018", "17.3.2018", "22.3.2018", "29.3.2018"];
var marchKm = ["3km", "10km", "1hour", "1hour"];
var events = ["Samsung marathon", "Ultra challange", "Red sea swim cup", "The mud day"];
var eventsDate = ["Tel aviv- Feb 2018", "Tiberias-Eilat- May 2008", "Eilat- June 2018", "Tel aviv- Oct 2018"];

window.onload = loadRec = function(numOfRect, title){

    var recsFind = document.getElementById("recsFind");
    var main=document.getElementById("rect");
    var recsIndex = document.getElementById("recsIndex");
    var recsList = document.getElementById("recsList");
    var recsEvents = document.getElementById("recsEvents");
        for (var i=0; i<numOfRect; i++)
        {
            if (title=="titleIndex") {

                var newRec=createRecIndex();
                recsIndex.appendChild(newRec);
                console.log(newRec);
                //$("a").append().text(titleIndex[i]);
                var recTitle = document.getElementsByTagName("a");
                // $recTitle = $('a[class^=onlyRectangles]');

                recTitle[i].appendChild(document.createTextNode(titleIndex[i]));
                recTitle[0].setAttribute("href", "CreateNew/createNew.html");
                recTitle[1].setAttribute("href", "JoinWorkout/find.html");
                recTitle[2].style.left= "42px";
                recTitle[2].style.top= "47px";
                recTitle[2].setAttribute("href", "vip/special/specialFeb.html");
                recTitle[3].setAttribute("href", "results/results.html");
                recTitle[3].style.left= "32px";
                recTitle[3].style.top= "47px";

                //recTitle[3].setAttribute("href", "#");

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

            } else if(title=="titleFebruary") {
                var newRec=createRecSpecials();
                recsSpecialFeb.appendChild(newRec);
                console.log(newRec);
                var recDate=document.getElementsByClassName('specialDate');
                recDate[i].innerHTML=februaryDate[i];
                var recTitle=document.getElementsByClassName("specialA");
                recTitle[i].appendChild(document.createTextNode(titleSpecialFeb[i]));
                recTitle[0].setAttribute("href", "halfMarathon.html");
                //$(".specialA")[1].href = "trailRun.html";
                var recKm = document.getElementsByClassName('specialKilometer');
                recKm[i].innerHTML=februaryKm[i];
                //$("article > a").attr("href", "halfMarathon.html");
                //var recImg=document.getElementsByTagName("a");
                //$("article > .recImg").attr("href", "#");
                //$("article > .angleRightIcon")[0].setAttribute("href", "#");
                //$("article > .angleRightIcon")[0].setAttribute("href", "#");

                //recImg[1].setAttribute("href", "#");
                //console.log(recImg[i]);
                // console.log(februaryDate[i]);
                // console.log(recDate[i]);

            }   else if(title=="titleMarch"){
                var newRec=createRecSpecials();
                recsSpecialMarch.appendChild(newRec);
                console.log(newRec);
                var recDate=document.getElementsByClassName('specialDate');
                recDate[i].innerHTML=marchDate[i];
                var recTitle=document.getElementsByClassName("specialA");
                recTitle[i].appendChild(document.createTextNode(titleSpecialMarch[i]));
                var recKm = document.getElementsByClassName('specialKilometer');
                recKm[i].innerHTML=marchKm[i];

            }   else if(title=="titleEvent"){
                var newRec = createRecEvent();
                recsEvents.appendChild(newRec);
                console.log(newRec);
                var recEvent = document.getElementsByClassName("eventRecTagA");
                recEvent[i].appendChild(document.createTextNode(events[i]));
                recEvent[0].setAttribute("href", "sumsungMarathon.html");
                var  recEventSubTitle = document.getElementsByTagName("p");
                recEventSubTitle[i].appendChild(document.createTextNode(eventsDate[i]));
                console.log(events[0]);
            }
            //console.log(recTitle);
        }

}

function createRecIndex() {
    var newObj = document.createElement("section");
    newObj.className = "rectangles";
    var newElemP = document.createElement("a");
    newElemP.className="onlyRectangles"
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
function createRecSpecials() {
    var newObj = document.createElement("section");
    newObj.className = "rectangles";
    var newElemDate = document.createElement("span");
    newElemDate.className = "specialDate";
    newObj.appendChild(newElemDate);
    var newElemA = document.createElement("a");
    newElemA.className = "specialA";
    newObj.appendChild(newElemA);
    var newElemKilometer = document.createElement("span");
    newElemKilometer.className= "specialKilometer";
    newObj.appendChild(newElemKilometer);
    var newIcon = document.createElement("img");
    //newElemA.className = "angleRightIcon";
    newObj.appendChild(newIcon);
    newIcon.src="../../images/angleRight.png";
    newIcon.setAttribute("height", "15");
    newIcon.setAttribute("width", "15");
    //console.log((newElemKilometer));
    return newObj;
}
function createRecEvent() {
    var newObj = document.createElement("section");
    newObj.className = "rectangles";
    var newElemEventTitle = document.createElement("a")
    newElemEventTitle.className = "eventRecTagA";
    newObj.appendChild(newElemEventTitle);
    var newElemEventSubTitle = document.createElement("p")
    newObj.appendChild(newElemEventSubTitle);
    return newObj;

}
function nextPage(numOfPage){
    if (numOfPage==1){
        window.location='list.html';
    }else{
        window.location='yourWorkout.html';
    }
}
$("document").ready(function () {

    $("#book").click(function () {
        //console.log("shello");
        $("#box").fadeIn();
    });
});

$("document").ready(function () {

    $("#closeButton").click(function () {

        $("#box").fadeOut();
    });
});


