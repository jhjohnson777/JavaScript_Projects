function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}



//slideshow script
let slideIndex = 1; //declaring slideIndex as 1
showSlides(slideIndex); //function showSlides parameter of slideIndex

//Next/previous controls
function plusSlides(n) {  //arrow click calls funtion showSlides with argument n (any number)
    showSlides(slideIndex += n); //adds 1 to n
}

// thumbnail image controls
function currentSlide(n) { //dot click calls function to take you to that slide
    showSlides(slideIndex = n); //n is the slide that was chosen
}

function showSlides(n) {  //the above functions are using this function to do the actual work
    let i;  //i is declared but not defined
    let slides = document.getElementsByClassName("mySlides"); //slides uses the associated slide "image" in the html
    let dots = document.getElementsByClassName("dot"); //dots uses the associated dot in the html
    if (n > slides.length) {slideIndex = 1} //if n (the chosen slide) becomes larger than the number of items in the array, set index to 1
    if (n < 1) {slideIndex = slides.length} //if parameter is less than 1 set index to number of slides in array
    for (i = 0; i < slides.length; i++) { //hides all but chosen slide
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {  //displays current slide
    dots[i].className = dots[i].className.replace(" active", "");
    }   
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}