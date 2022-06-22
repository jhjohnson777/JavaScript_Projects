function Call_Loop() {  //function called by button click
    var Digit = "";  //variable Digit is the number being displayed in the browser
    var X = 1;  //X is the variable driving the loop
    while (X < 11) { //as long as X is less than 11, run the loop
        Digit += "<br>" + X; //Digit becomes a line return and X value
        X++; //increase X by 1
    }
    document.getElementById("Loop").innerHTML = Digit; //displays Digit in browser each time through the loop
}


//String length
let text = "How long is this sentence?"; //text is a string
let length = text.length;  // .length measures number of digits in a string
document.getElementById("howLong").innerHTML = length; //displays the number it counts


//Instruments list
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // an array of instruments
var Content = ""; //varible declared as an empty string
var Y; // var y declared but not defined
function for_Loop() { //function called by button click
    for (Y = 0; Y < Instruments.length; Y++) { // declares Y equal to 0, as all as Y is less than 0 and then increase Y by 1 run the loop
        Content += Instruments[Y] + "<br>"; //Content variable becomes item in the array plus a line break
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; //displays declared value of Content
}


//getElementById assignment
function array_Function() { //function called by button click
    var Cat_Picture = []; //declared var
    Cat_Picture[0] = "sleeping"; //index 0 of array
    Cat_Picture[1] = "playing";//index 1 of array
    Cat_Picture[2] = "eating";//index 2 of array
    Cat_Picture[3] = "purring";//index 3 of array
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + "."; //displaying index 2 in a string
}


//Constant Keyword Assignment
function constant_function() {
    const person = {name:"John", height:"6ft", weight:"200lbs"}; //constant values declared
    person.name = "Jack"; //constant value changed
    person.tshirtSize = "large"; //new identifier and value
    document.getElementById("Constant").innerHTML = person.name + " is " + person.height + " tall and wears a size " + person.tshirtSize + ".";
}


//let
var X = 23;
document.write(X);
{
    let X = 895; //let is block scope and only available within these curly brackets
    document.write(X);
}
document.write(X); //var X applies outside the curly brackets


//return

function getIt() {
    return 4 * 3; //final line of code in a function and it tells the function what to return to the caller
}
document.getElementById("here").innerHTML = getIt();

let pickup = { // object
    make: "Nissan", // properties
    model: "Frontier",
    year: "2022",
    color: "Gun Metallic",
    description : function() { //method
        return "The vehicle is a " + this.year + " " + this.make + " " + this.model + " in " + this.color + ".";
    }
}
document.getElementById("pickup_object").innerHTML = pickup.description();


// Break jumps out of, or ends, the loop
let text1 = ""; //text1 is declared and defined as any string
for (let i = 0; i < 10; i++) { //for conditions - start at 0, conditioned to run while less than 10; increment by 1
    if (i === 3) { break; } //if condition - if i is 3, break - or stop the loop
    text1 += "The number is " + i + "<br>"; //text1 becomes a string with the number of the counter plus a line break
}
document.getElementById("break").innerHTML = text1; //display at declared id

//Continue sends it back to the start of the loop
let text2 = ""; //text1 is declared and defined as any string
for (let i = 0; i < 10; i++) { //for conditions - start at 0, conditioned to run while less than 10; increment by 1
    if (i === 3 || i === 7 || i === 8) { continue; } //if condition - if i is 3, continue will restart the loop from here skipping the string assembly
    text2 += "The number is " + i + "<br>"; //text1 becomes a string with the number of the counter plus a line break
}
document.getElementById("continue").innerHTML = text2; //display at declared id