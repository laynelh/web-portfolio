// // script.js
// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelectorAll('.slide h2');
    
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             }
//         });
//     }, {
//         threshold: 0.5 // Adjust this value to control when the fade-in happens (50% of the element is visible)
//     });

//     slides.forEach(slide => {
//         observer.observe(slide);
//     });
// });