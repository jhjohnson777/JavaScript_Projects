var X = 20    // global variable X

function plusOne() {
    var Y = 10;   // local variable Y
    document.getElementById("plus").innerHTML = (Y + 1);
}

function plusTwo() {
    var Y = 10;   // adding a local variable fixed the issue
    document.write(Y + 2);  // devtools/console shows Y is not defined
}
plusTwo();

function hello() {
    if (new Date().getHours() < 18) { // if todays hour is less than 6pm display...
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

function eBikeAge() { //function called by submit button
    age = document.getElementById("age").value; // defining the value given as age
    if (age < 16) {  // condition - if value is less than 16 display... in "response"
        document.getElementById("response").innerHTML = "Sorry, you are not old enough to ride an eBike.";
    }
    else {   // condition - if value is anything else display... in "response"
        document.getElementById("response").innerHTML = "Let's ride eBikes!";
    }
}

function Time_function() { //function called by clicking button
    var Time = new Date().getHours(); // variable declared as current hour of current day
    var Reply; // Reply is a variable because it will change based on time of day
    if (Time < 12 == Time > 0) { // if time is between 0 and 12 it is morning - 0 is midnight
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { // if 12 noon to less than 6pm, it is afternoon
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time."; // any other time is evening - 6 to midnight
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}