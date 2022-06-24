// Switch
function animal() { //function call by clicking submit button
    var final_result; // declared result variable
    var animals = document.getElementById("favAnimal").value; //variable that is created by user input location
    var animal_string = " is a great animal!"; //declared string will be used as part of the final result
    switch(animals) { //switch statement allows different actions based on different conditions
        case "Lion": //case declares a chosen condition and follows with its action
            final_result = "Lion" + animal_string;
        break; //stop once executed
        case "Tiger":
            final_result = "Tiger" + animal_string;
        break;
        case "Bear":
            final_result = "Bear" + animal_string;
        break;
        case "Zebra":
            final_result = "Zebra" + animal_string;
        break;
        case "Rhino":
            final_result = "Rhino" + animal_string;
        break;
        case "Hippo":
            final_result = "Hippo" + animal_string;
        break;
        case "Alligator":
            final_result = "Alligator" + animal_string;
        break;
        default: //best practice is to include a default action/result when using a switch statement. this will display if none of the case conditions are met.
            final_result = "Please enter an animal exactly as written on the above list.";
    }
    document.getElementById("result").innerHTML = final_result; //displays result based on case condition met
}


//getElementByClassName
function Hello_World_Function() {  //function called by button click
    var A = document.getElementsByClassName("Click"); //var A is now an array of elements with the class name Click
    A[0].innerHTML = "The text has changed!"; //display string at index 0(the first) of the array
}

// Canvas
var c = document.getElementById("drawing");
var ctx = c.getContext("2d");
var grd = ctx.createRadialGradient(75, 125, 50, 250, 125, 400); //dictates location, size and direction of circular gradient
grd.addColorStop(0, "green"); //color of cirle
grd.addColorStop(1, "white"); //outside color of gradient
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250); // specifies area on the canvas that the gradient covers

//Canvas 2
var c = document.getElementById("drawing2");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0,0,460,0); //determines start, angle, and width of gradient
grd.addColorStop(0, "red"); //start point of color by percentage of determined area
grd.addColorStop(.2, "orange");
grd.addColorStop(.4, "yellow");
grd.addColorStop(.6, "green");
grd.addColorStop(.8, "blue");
grd.addColorStop(1, "purple");
ctx.fillStyle = grd;
ctx.fillRect(20,20,460,210); //selects area of canvas

