function myAddition() {
    var sum = 2 + 2;
    document.getElementById("Math").innerHTML = "2 + 2 = " + sum;
}

function mySubtraction() {
    var minus = 16 - 4;
    document.getElementById("Sub").innerHTML = minus;
}

function myMulti() {
    var times = 12 * 9;
    document.getElementById("Maths").innerHTML = "12 * 9 = " + times;
}

function myDivide() {
    var divide = 15 / 3;
    document.getElementById("division").innerHTML = "15 / 3 = " + divide;
}

function longProblem() {
    var long = 16 + 32 - 12 * 80 * (3 + 2) / 12;
    document.getElementById("BigOne").innerHTML = long;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("mod").innerHTML = "When you divide 25 by 6 you have a remainder of: "
+simple_Math;
}

function negOp() {
    var x = 15;
    document.getElementById("negation").innerHTML = -x;
}

function increase() {
    var Y = 5;
    Y++
    document.getElementById("bumpUp").innerHTML = (Y);
}

function decrease() {
    var Z = 5;
    Z--
    document.getElementById("bumpDown").innerHTML = (Z);
}

window.alert(Math.random() * 1000);

function roundNum() { // the JavaScript Math object allows you to perform mathematical tasks on numbers with an assortment of defined properties
    var A = 8.2;
    document.getElementById("round").innerHTML = Math.round(A);
}
