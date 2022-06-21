function builtIt() {
    var part1 = "Here "; // variables are individual words used to create a sentence
    var part2 = "is ";
    var part3 = "my ";
    var part4 = "sentence.";
    var whole_sentence = part1.concat(part2, part3, part4); // .concat() is used to assemble var strings in a sentence
    document.getElementById("sentence").innerHTML = whole_sentence; // displays the whole sentence
}
builtIt();

function cutIt() {  // function to be called by button click
    var sentence = "Look at me go!";  // variable sentence is a string
    var cut = sentence.slice(0, 4);  // var cut uses .slice to extract 0, 1, 2, 3 places in the string
    document.getElementById("smallPart").innerHTML = cut; //displays the variable cut to id smallPart
}

function upper() {  //function to be called by button click
    var title = "They are all so big."; // variable title is a string
    var big = title.toUpperCase();  // .toUpperCase method will make all letters in the string upper case
    document.getElementById("upperCase").innerHTML = big; // displays the variable big to id upperCase
}

function numToString() { // function to be called by button click
    var X = 50;  // declared variable
    document.getElementById("convToString").innerHTML = X.toString(); // .toString method converts this number variable to a string
}

function precise() {  // function to be called by button click
    var Y = 92783749387090.766284379   // variable Y is a number we want represented by a specified amount of digits
    document.getElementById("toTheDigit").innerHTML = Y.toPrecision(7); //displays number in 7 digits. in this case it has an exponent associated wiht it
}

function fixed() {  //function to be called by button click
    var Z = 98783476738.87689; // defined variable with 5 places after the decimal
    document.getElementById("fix").innerHTML = Z.toFixed(2); //.toFixed rounds to the specified digit after the decimal. in this case, two places past the decimal
}

function stg() { //function to be called by button click
    var words = "This is still a string"; //var with a string
    var result = words.valueOf(); //.valueOf returns the primitive value of a string. this is a JS default and typically not applied in our code.
    document.getElementById("thisValue").innerHTML = result; //displays result
}