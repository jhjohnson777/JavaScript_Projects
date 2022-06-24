function displayType(character) { //function called by click with a parameter of any character
    var characterType = character.getAttribute("data-character-type"); // var characterType gets its value from data-character-type in the clicked element
    alert(characterType + " is in the " + character.innerHTML + " universe!"); //alert is diplayed with a constructed string that uses the variables or parts of that element
}