import initProject from "./project.js";
const alert = document.getElementById("alert");

const aside = document.querySelector("aside");
let windowWidth = window.innerWidth;
const pathname = window.location.pathname.split("/").pop();

if (windowWidth < 768) aside.attributeStyleMap.set("left", CSS.px(-30));

aside.addEventListener("click", () => {
  if (aside.computedStyleMap().get("left").value < 30) {
    aside.attributeStyleMap.set("left", CSS.px(30));
  }
});

document.body.addEventListener(
  "click",
  () => {
    if (windowWidth < 768) aside.attributeStyleMap.set("left", CSS.px(-30));
  },
  true
);

window.onresize = () => {
  windowWidth = window.innerWidth;
};

if (pathname === "projects") {
  initProject();
}

alert.addEventListener("transitionend", () => {
  setTimeout(() => {
    alert.attributeStyleMap.set("right", CSS.percent(-100));
  }, 2000);
});
