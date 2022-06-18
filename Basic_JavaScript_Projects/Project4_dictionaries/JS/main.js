function my_Dictionary() { //creating a function called my_Dictionary
    var Auto = {  //variable named auto
        Year:"2014",   //key-value pairs in the dictionary
        Make:"Cadillac",
        Model:"CTS",
        Trim:"V",
        Transmission:"Manual",
        Color:"Black",
        BodyType:"Wagon",
        Color:"Tan"   // last key-value pair will display key is used more than once
    };
    delete Auto.Color;  //deletes a key making it show undefined when called
    document.getElementById("Dictionary").innerHTML = Auto.Color; //calls key+variable
}