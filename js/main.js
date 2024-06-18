const d = document;

d.addEventListener("DOMContentLoaded", () => {
  const slides = d.querySelectorAll(".carousel-slide");
  const prevButton = d.querySelector(".prev");
  const nextButton = d.querySelector(".next");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function showPrevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  nextButton.addEventListener("click", showNextSlide);
  prevButton.addEventListener("click", showPrevSlide);

  showSlide(currentSlide);

  d.getElementById("request-service");
});

function redirectRequest() {
  window.location.replace("/pages/solicitar.html");
}
