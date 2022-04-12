// const scale = (num, in_min, in_max, out_min, out_max) => {
//   return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
// };
const screens = document.querySelectorAll(".screen");
const btn = document.getElementById("play-btn");
const boxInsects = document.querySelectorAll(".box-insect");
const screenInsect = document.querySelector(".screen-insect");
console.log(btn);
screens.forEach((screen, index) => {
  screen.style.top = `${100 * index}vh`;
});
btn.addEventListener("click", (eo) => {
  screens.forEach((screen) => {
    screen.style.transform = `translateY(-100vh)`;
  });
});
const randomNum = () => {
  return Math.trunc(Math.random() * 100);
};
let clickCounter = 1;
const scoreCounter = document.getElementById("score-counter");
scoreCounter.innerHTML = clickCounter;
const min = document.getElementById("min");
const sec = document.getElementById("sec");
let minCounter = 0;
let secCounter = 0;

const timeCounter = () => {
  setTimeout(() => {
    min.innerHTML = minCounter;
    sec.innerHTML = secCounter;
    if (secCounter < 10) {
      sec.innerHTML = `0${secCounter}`;
    }
    if (minCounter < 10) {
      min.innerHTML = `0${minCounter}`;
    }
    secCounter++;
    if (secCounter === 59) {
      minCounter++;
      secCounter = 0;
    }
    timeCounter();
  }, 1000);
};

boxInsects.forEach((box) => {
  box.addEventListener("click", (eo) => {
    screens.forEach((screen) => {
      screen.style.transform = `translateY(-200vh)`;
    });
    const img = box.getElementsByTagName("img")[0].src;
    const imgNew = document.createElement("img");
    imgNew.src = img;
    imgNew.className = "hi";
    screenInsect.append(imgNew);
    imgNew.style.left = `${randomNum()}%`;
    imgNew.style.top = `${randomNum()}%`;
    timeCounter();
    screenInsect.addEventListener("click", (eo) => {
      if (eo.target.classList.contains("hi")) {
        clickCounter++;
        // console.log(i);
        for (let counter = 0; counter < clickCounter; counter++) {
          const imgNew = document.createElement("img");
          imgNew.src = img;
          imgNew.className = "hi";
          screenInsect.append(imgNew);
          imgNew.style.left = `${randomNum()}%`;
          imgNew.style.top = `${randomNum()}%`;
        }
        // if you want to know numbers of an elemnt
        // const insectsNumber = screenInsect.getElementsByTagName("img").length;
        scoreCounter.innerHTML = clickCounter;
        if (clickCounter >= 20) {
          const popUp = document.querySelector(".fixed");
          popUp.classList.add("move");
        }
      }
    });
  });
});
