function getReceipt() {
    //this initializes our string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>"; //beginning of string to be displayed
    var runningTotal = 0; //runningTotal is the variable we continue adding to until we have a final total - will still be called running total
    var sizeTotal = 0; //dollar of the selected size
    var sizeArray = document.getElementsByClassName("size"); //array created by gathering within the "size" id
    for (var i = 0; i < sizeArray.length; i++) { //run this loop for as many times as there are items in the loop
        if (sizeArray[i].checked) { //if item is checked
            var selectedSize = sizeArray[i].value;  //set selectedSize variable to the value of the selected size
            text1 = text1 + selectedSize + "<br>"; //text1 will now include the size
        }
    }
    if (selectedSize === "Personal Pizza") { //selected size determines sizeTotal
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; //runningTotal is not equal to sizeTotal
    console.log(selectedSize + " = $" + sizeTotal + ".00"); //showing behind the scenes math in the console
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each funtion
    getTopping(runningTotal,text1); //getTopping is called to tally the toppings
};

function getTopping(runningTotal,text1) { //topping function using running total and text1 as parameters
    var toppingTotal = 0; //new variable for total of toppings
    var selectedTopping = []; //variable topping array
    var toppingArray = document.getElementsByClassName("toppings"); //topping array is made up of items in the toppings class
    for (var j = 0; j < toppingArray.length; j++) { //run loop for as many times as we have items in the array
        if (toppingArray[j].checked) { //if item in the array is checked
            selectedTopping.push(toppingArray[j].value); //add it to a new array call selectedTopping
            console.log("selected topping item: ("+toppingArray[j].value+")"); //create this array in the console
            text1 = text1 + toppingArray[j].value + "<br>"; //text1 now includes a list of toppings
        }
    }
    var toppingCount = selectedTopping.length; //variable toppingCount becomes the numbers of items in the selected topping array
    if (toppingCount > 1) { //if topping count is greater than 1
        toppingTotal = (toppingCount - 1); //subtract 1 from the total - pizza includes one free topping
    } else {
        toppingTotal = 0; //otherwise the topping count is 0
    }
    runningTotal = (runningTotal + toppingTotal); //running total now includes sizTotal and toppingTotal
    console.log("total selected topping items: " + toppingCount); //showing behind the scenes math in the console
    console.log(toppingCount + " topping - 1 free topping = " + "$" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: " + "$" + runningTotal + ".00");
    document.getElementById("showText").innerHTML=text1; //displays your order in the browser window
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + 
        runningTotal + ".00" + "</strong></h3>"; //diplays your total in the browser window
};