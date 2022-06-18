function bt() {     // function being called by clicking the button
    document.getElementById("nm").innerHTML = "Bill and Ted"; 
}  // document = browser window, the p element with this id wants this info, innerhtml means between the opening and closing tags

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!"; // += to concatenate, just + does not work
    document.getElementById("Concatenate").innerHTML = sentence;
}

function myTimes(p1, p2) {
    return p1 * p2;
    
}
document.getElementById("answer").innerHTML = myTimes(8, 5)