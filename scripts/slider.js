let imgWidth = document.querySelector('.slider').clientWidth;

const imageContainer = document.querySelector('.slider_body');
const images = document.querySelectorAll('.slide');
const totalImages = images.length;


const dotsContainer = document.querySelector('.dot_container');
const prevBtn = document.querySelector('.arrow_prev');
const nextBtn = document.querySelector('.arrow_next');

let currentIndex = 1;
let lastIndex;
let moveDistance;

function calculateNextDistance() {
  moveDistance = -(currentIndex * imgWidth);
  lastIndex = currentIndex;

  if (currentIndex === totalImages) {
    currentIndex = 1;
    moveDistance = 0;
  } else {
    currentIndex++;
  }
  slideImages();
}

function calculatePrevDistance() {
  if (currentIndex > 1) {
    lastIndex = currentIndex;
    currentIndex--;
    moveDistance = moveDistance + imgWidth;
  } else {
    lastIndex = currentIndex;
    currentIndex = totalImages;
    moveDistance = -((totalImages - 1) * imgWidth);
  }

  slideImages();
}

function slideImages() {
  imageContainer.style.transform = `translateX(${moveDistance}px)`;
  document.querySelector(`#dot-${lastIndex}`).classList.remove('is-active');
  document.querySelector(`#dot-${currentIndex}`).classList.add('is-active');
}

function slideDotImages(e) {
  const dots = this.querySelectorAll('.dot');
  for (let i = 1; i <= dots.length; i++) {
    if (e.target.id === `dot-${i}`) {
      lastIndex = currentIndex;
      currentIndex = i;
      moveDistance = -((currentIndex - 1) * imgWidth);
    }
  }
  slideImages();
}

function init() {
  document.querySelector(`#dot-${currentIndex}`).classList.remove('is-active');

  imgWidth = document.querySelector('.slider').clientWidth;
  images.forEach((img) => (img.style.width = `${imgWidth}px`));
  imageContainer.style.width = `${imgWidth * totalImages}px`;

  currentIndex = totalImages;
  calculateNextDistance();
}

init();

nextBtn.addEventListener('click', calculateNextDistance);
prevBtn.addEventListener('click', calculatePrevDistance);
dotsContainer.addEventListener('click', slideDotImages);
window.onresize = init

