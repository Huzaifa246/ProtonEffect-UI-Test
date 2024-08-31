document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".nav-toggle").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("show");
  });

  // Enable dropdown toggle for mobile view
  document.querySelectorAll(".dropdown > a").forEach((dropdownLink) => {
    dropdownLink.addEventListener("click", function (event) {
      event.preventDefault();
      dropdownLink.parentElement.classList.toggle("show");
    });
  });
});


//Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
