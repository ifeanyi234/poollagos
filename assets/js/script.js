const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close");
const navbar = document.querySelector(".navbar-nav");
hamburger.addEventListener("click", function () {
  navbar.classList.add("active");
  // window.onscroll = function () {
  //   window.scrollTo(0, 0);
  // };
});
closeBtn.addEventListener("click", function () {
  navbar.classList.remove("active");
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    a;
    if (index === slideIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds
