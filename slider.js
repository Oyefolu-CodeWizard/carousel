"use strict";
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
const maxSlide = slides.length;

// const sliderWrapper = document.querySelector(".slider-wrapper");
// sliderWrapper.style.transform = "scale(0.4) translateX(-800px)";
// sliderWrapper.style.overflow = "visible";

const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide='${i}'></button>`
    );
  });
};
createDots();

const activateDot = function (slide) {
  const dots = document.querySelectorAll(".dots__dot");
  dots.forEach((dot) => dot.classList.remove("dots__dot--active"));

  const activeDot = document.querySelector(`.dots__dot[data-slide='${slide}']`);
  activeDot.classList.add("dots__dot--active");
};
activateDot(0);

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

// Next Slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});

setInterval(nextSlide, 3000);
