const slideList = [
  {
    img: "japan.jpg",
    text: "Japan",
    currclass: "slider",
  },
  {
    img: "poland.jpg",
    text: "Poland",
    currclass: "slider2",
  },
  {
    img: "canada.jpg",
    text: "Canada",
    currclass: "slider3",
  },
];

const image = document.querySelector("img.slider");
const h1 = document.querySelector("h1.slider");
const dots = [...document.querySelectorAll(".dots span")];

const time = 3000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].img;
  h1.textContent = slideList[active].text;
  h1.className = "";
  h1.classList.add(slideList[active].currclass);
  changeDot();
};

let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
  if (e.keyCode == 37 || e.keyCode == 39) {
    clearInterval(indexInterval);
    e.keyCode == 37 ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    h1.className = "";
    h1.classList.add(slideList[active].currclass);
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener("keydown", keyChangeSlide);
