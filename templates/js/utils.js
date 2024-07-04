const professions = [
  "Full-Stack Web Developer",
  "Software Engineer",
  "Data Scientist",
];
const specialization = document.querySelector(".specialization");
let currentTextIndex = 0;
let currentText = professions[currentTextIndex];
let isErasing = false;
let typingDelay = 100;
let eraseDelay = 50;

export function typeText() {
  if (isErasing) {
    currentText = currentText.substring(0, currentText.length - 1);
  } else {
    currentText = professions[currentTextIndex].substring(
      0,
      currentText.length + 1
    );
  }

  specialization.textContent = currentText;

  if (currentText === professions[currentTextIndex] && !isErasing) {
    isErasing = true;
    typingDelay = 1000;
  } else if (currentText === "" && isErasing) {
    isErasing = false;
    typingDelay = 100;
    currentTextIndex = (currentTextIndex + 1) % professions.length;
  }

  const delay = isErasing ? eraseDelay : typingDelay;
  setTimeout(typeText, delay);
}

export function NavBar() {
  const opener = document.querySelector(".opener");
  const nav = document.querySelector(".headerNav");
  let open = false;
  function navMenu() {
    if (open) {
      nav.style.left = "0";
      opener.style.left = "80%";
      opener.style.transform = "rotate(180deg)";
      open = false;
    } else {
      nav.style.left = "-100%";
      opener.style.left = "-4%";
      opener.style.transform = "rotate(0deg)";
      open = true;
    }
  }

  opener.addEventListener("click", navMenu);
}

export function IntroVId() {
  let vid = document.querySelectorAll("video");
  vid.forEach((video) => {
    video.addEventListener("mouseover", () => {
      video.play();
    });
    video.addEventListener("mouseout", () => {
      video.pause();
    });
  });
}

export function getpercent(num, percent) {
  return (percent / 100) * num;
}

export default function createElement(
  parent,
  elem,
  attribute = {},
  content = null
) {
  const element = document.createElement(elem);
  if (content) {
    element.innerText = content;
  }

  if (attribute) {
    for (const key in attribute) {
      element.setAttribute(key, attribute[key]);
    }
  }

  parent.appendChild(element);
  return element;
}


export function checkChildOverflow(element) {
  const lastChild = element.lastElementChild;

  if (!lastChild) {
    return false;
  }

  const isOverflowing = 
    lastChild.offsetLeft + lastChild.offsetWidth > element.clientWidth + 360;

  return isOverflowing;
}