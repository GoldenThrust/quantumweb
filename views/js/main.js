import { typeText, NavBar, IntroVId, showAlert } from "./utils.js";
import { AnimateSlide } from "./canvas.js";
import { getWork } from "./work.js";

const alert = document.getElementById("alert");

const bgcover = document.getElementById("bgcover");

const works = document.querySelectorAll(".works span");
const workpopup = document.getElementById("workpopup");

const mailChirp = document.getElementById("mailchirp");

requestAnimationFrame(AnimateSlide);

NavBar();
typeText();
IntroVId();
works.forEach((elem) => {
  elem.addEventListener("click", () => {
    getWork(elem.dataset.key);
    bgcover.style.display = "block";
    workpopup.style.display = "block";
  });
});

mailChirp.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);

  for (const child of e.target.children) {
    if (child.value === "") {
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
