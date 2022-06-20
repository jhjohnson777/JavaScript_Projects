function myAddition() {
    var sum = 2 + 2;   // adding in JS
    document.getElementById("Math").innerHTML = "2 + 2 = " + sum;
}

function mySubtraction() {
    var minus = 16 - 4;   // subtracting in JS
    document.getElementById("Sub").innerHTML = minus;
}

function myMulti() {
    var times = 12 * 9;   //Multiplying in JS
    document.getElementById("Maths").innerHTML = "12 * 9 = " + times;
}

function myDivide() {
    var divide = 15 / 3;  // dividing in JS
    document.getElementById("division").innerHTML = "15 / 3 = " + divide;
}

function longProblem() {
    var long = 16 + 32 - 12 * 80 * (3 + 2) / 12;  // executing a long math problem in JS
    document.getElementById("BigOne").innerHTML = long;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;  // this is give you the remainder of a division problem
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: "
+simple_Math;
}

function negOp() {
    var x = 15;  
    document.getElementById("negation").innerHTML = -x;  // this will give you the opposite of your number. pos to neg or vice versa
}

function increase() {
    var Y = 5;
    Y++   // increment by 1
    document.getElementById("bumpUp").innerHTML = (Y);
}

function decrease() {
    var Z = 5;
    Z--  //decrement by 1
    document.getElementById("bumpDown").innerHTML = (Z);
}

window.alert(Math.random() * 1000); // math object that generates a random number between 0 and 1000

function roundNum() { // the JavaScript Math object allows you to perform mathematical tasks on numbers with an assortment of defined properties
    var A = 8.2;  
    document.getElementById("round").innerHTML = Math.round(A); //Math.round() will round a number to the nearest integer
}
