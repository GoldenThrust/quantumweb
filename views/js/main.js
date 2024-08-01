import { showAlert } from "./utils.js";
import { AnimateSlide } from "./canvas.js";
import InitWork from "./work.js";
const NavBar = document.querySelector(".headerNav");
const alert = document.getElementById("alert");

const bgcover = document.getElementById("bgcover");
const workpopup = document.getElementById("workpopup");

const mailChirp = document.getElementById("mailchirp");

requestAnimationFrame(AnimateSlide);


const specialization = document.querySelector(".specialization");
const professions = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "SysAdmin and DevOps Engineer"
];

let currentTextIndex = 0;
let currentText = professions[currentTextIndex];
let isErasing = false;
let typingDelay = 100;
let eraseDelay = 50;
let mouseStart = 0;

const delay = isErasing ? eraseDelay : typingDelay;
setInterval(() => {
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
}, delay);


window.addEventListener("touchstart", (e) => {
  mouseStart = e.touches[0].clientX;
});

window.addEventListener("touchmove", (e) => {
  const dx = e.touches[0].clientX - mouseStart;

  if (mouseStart < 30) {
    if (dx > 10) {
      NavBar.attributeStyleMap.set("left", CSS.percent(0));
    }
  } else if (NavBar.attributeStyleMap.get("left").value === 0) {
    if (dx < 0) {
      NavBar.attributeStyleMap.set("left", CSS.percent(-100));
    }
  }
});

window.addEventListener("touchend", (e) => {
  mouseStart = null;
});

mailChirp.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);

  for (const child of e.target.children) {
    if (child.value === "" && child.id !== "password") {
      showAlert("All fields must be filled out");
      return;
    }
    if (child.type != "submit") {
      child.value = "";
    }
  }

  const resp = await fetch("/chirpmail", {
    method: "POST",
    body: form,
  });

  if (resp.ok) {
    const text = await resp.text();
    showAlert(text);
  } else {
    showAlert("Failed to send message. Please try again later.");
  }
});

bgcover.addEventListener("click", () => {
  bgcover.style.display = "none";
  workpopup.style.display = "none";
});

alert.addEventListener("transitionend", () => {
  setTimeout(() => {
    alert.attributeStyleMap.set("right", CSS.percent(-100));
  }, 2000);
});

InitWork()
