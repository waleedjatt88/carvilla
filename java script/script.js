// JavaScript for the car slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("car-slide");
    let dots = document.getElementsByClassName("dot");
    
    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    
    // Increment slide index
    slideIndex++;
    
    // Reset to first slide if at end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Update dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate dot
    slides[slideIndex-1].classList.add("active");
    dots[slideIndex-1].className += " active";
    
    // Change slide every 5 seconds
    setTimeout(showSlides, 6000);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

       