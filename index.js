let slideTimer;
window.onload = () => {
    slideTimer = setTimeout(nextImage, 5000);
}

function nextImage() {
  const slides = [...document.getElementsByClassName("slide")];
  const activeImage = document.querySelector(".active-slide");
  let index = slides.indexOf(activeImage);
  slides[index].classList.toggle("active-slide");
  if (index == slides.length - 1) index = -1;
  slides[index + 1].classList.toggle("active-slide");
  updateCircle(index + 1);
  clearTimeout(slideTimer);
  slideTimer = setTimeout(nextImage, 5000);
}

function previousImage() {
  const slides = [...document.getElementsByClassName("slide")];
  const activeImage = document.querySelector(".active-slide");
  let index = slides.indexOf(activeImage);
  slides[index].classList.toggle("active-slide");
  if (index == 0) index = slides.length;
  slides[index - 1].classList.toggle("active-slide");
  updateCircle(index - 1);
  clearTimeout(slideTimer);
  slideTimer = setTimeout(previousImage, 5000);
}

function updateImage(index) {
  const slides = [...document.getElementsByClassName("slide")];
  const activeImage = document.querySelector(".active-slide");
  let currentIndex = slides.indexOf(activeImage);
  slides[currentIndex].classList.toggle("active-slide");
  slides[index].classList.toggle("active-slide");
  updateCircle(index);
  clearTimeout(slideTimer);
  slideTimer = setTimeout(nextImage, 5000);
}

const leftArrow = document.querySelector(".left");
leftArrow.addEventListener("click", (e) => {
  previousImage();
});

const rightArrow = document.querySelector(".right");
rightArrow.addEventListener("click", (e) => {
  nextImage();
});

const circles = [...document.getElementsByClassName("circle")];
circles.forEach(circle => {
  circle.addEventListener("click", (e) => {
    
    updateCircle(e.target.dataset.circleIndex);
    updateImage(e.target.dataset.circleIndex);
    //updateImage(e.target["data-circle-index"]);
  });
});

function updateCircle(index) {
  console.log(index);
  const active = document.querySelector(".active-circle");
  active.classList.remove("active-circle");
  const circles = [...document.getElementsByClassName("circle")];
  circles[index].classList.add("active-circle");
}
