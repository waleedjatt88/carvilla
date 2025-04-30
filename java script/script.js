// JavaScript for the car slideshow
let slideIndex = 0;
showSlides()

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
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].className += " active";

    // Change slide every 5 seconds
    setTimeout(showSlides, 3000);
}
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}
document.getElementById('mobile-menu').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('active');
});
const logo = document.getElementById("logo-img");
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 20) {
        header.classList.add("scrolled");
        logo.src = "../Assets/Logo/0f1021e9-4dd3-4f4e-888e-498411239af4.png";
    } else {
        header.classList.remove("scrolled");
        logo.src = "../Assets/Logo/logoimage-removebg-preview.png";
    }
});
// document.addEventListener('DOMContentLoaded', function() {
//     const menuToggle = document.getElementById('mobile-menu');
//     const menu = document.getElementById('menu');
    
//     menuToggle.addEventListener('click', function() {
//         menu.classList.toggle('active');
//         // Change hamburger to X when active
//         if (menu.classList.contains('active')) {
//             menuToggle.innerHTML = '✕';
//         } else {
//             menuToggle.innerHTML = '☰';
//         }
//     });
    
//     // Close menu when a link is clicked (for mobile)
//     const menuItems = document.querySelectorAll('#menu li a');
//     menuItems.forEach(item => {
//         item.addEventListener('click', function() {
//             if (window.innerWidth <= 768) {
//                 menu.classList.remove('active');
//                 menuToggle.innerHTML = '☰';
//             }
//         });
//     });
// });










