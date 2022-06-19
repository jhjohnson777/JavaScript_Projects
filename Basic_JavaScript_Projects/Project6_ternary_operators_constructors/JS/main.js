function Ride_Function() { //function called by button
    var Height, Can_ride; //identifies two variables
    Height = document.getElementById("Height").value; //height is pulled from input value
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";//tenary logic true is too short, false is tall enough
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";//displays answer to element id
}

function Voting_Age() {
    var Age, Can_Vote;
    Age = document.getElementById("Age").value;
    Can_Vote = (Age < 18) ? "You are not old enough to vote.":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_Vote;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}
function myDodge() {
    document.getElementById("New_and_This").innerHTML = "Jack has an awesome " + Jack.Vehicle_Color + " " + Jack.Vehicle_Make + " " + Jack.Vehicle_Model + " that was manufactured in " + Jack.Vehicle_Year;
}

var five = 5
document.write(true); // does not display using a reserved word as a variable, also screws up script after it

function Bicycle(Brand, Model, Color, Price) {
    this.Bicycle_Brand = Brand;
    this.Bicycle_Model = Model;
    this.Bicycle_Color = Color;
    this.Bicycle_Price = Price;
}

function Count_Function() {  // calls function from html file
    document.getElementById("Nested_Function").innerHTML = Count(); // location where return will be shown by id
    function Count() {   // function of returned answer
        var counter = 0; // stated variable
        function Plus_one() {counter += 1;} // variable plus 1
        Plus_one(); 
        return counter;
    }
}