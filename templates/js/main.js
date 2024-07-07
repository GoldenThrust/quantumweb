import { typeText, NavBar, IntroVId } from "./utils.js";
import { AnimateSlide } from "./canvas.js";
import { getWork } from "./work.js";


const bgcover = document.getElementById("bgcover");

const works = document.querySelectorAll(".works span");
const workpopup = document.getElementById("workpopup");

requestAnimationFrame(AnimateSlide);

NavBar();
typeText();
IntroVId();
works.forEach((elem)=> {
    elem.addEventListener("click", () => {
        getWork(elem.dataset.key)
        bgcover.style.display = "block";
        workpopup.style.display = "block";
    })
})

bgcover.addEventListener("click", () => {
    bgcover.style.display = "none";
    workpopup.style.display = "none";
})

