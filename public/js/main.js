import createElement, { fetchJson, showAlert, Test } from "./utils.js";
import { AnimateSlide } from "./canvas.js";
import InitWork from "./work.js";
const NavBar = document.querySelector(".headerNav");
const alert = document.getElementById("alert");
const menu = document.getElementById("menu");
const bgcover = document.getElementById("bgcover");
const workpopup = document.getElementById("workpopup");
const mailChirp = document.getElementById("mailchirp");
const blogShowMore = document.querySelector("#blog  .show-more");
const blogs = document.querySelector("#blog .blogs");

requestAnimationFrame(AnimateSlide);


const specialization = document.querySelector(".specialization");
const professions = [
  "Software Engineer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "SysAdmin and DevOps Engineer"
];

let menuOpen = false;
let currentTextIndex = 0;
let currentText = professions[currentTextIndex];
let isErasing = false;
let typingDelay = 100;
let eraseDelay = 50;

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

menu.addEventListener("click", (e) => {
  if (menuOpen) {
    NavBar.attributeStyleMap.set("left", CSS.percent(-100));
    menu.src = "./img/menu.svg";
  }
  else {
    NavBar.attributeStyleMap.set("left", CSS.percent(0));
    menu.src = "./img/menucnc.svg";
  }

  menuOpen = !menuOpen;
})

mailChirp.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);

  for (const child of e.target.children) {
    if (child.value === "" && child.id !== "password" && child.name !== "_csrf") {
      console.log(child);
      showAlert("All fields must be filled out");
      return;
    }
    if (child.type != "submit" && child.id !== "password" && child.name !== "_csrf") {
      child.value = "";
    }
  }

  const resp = await fetch("/chirpmail", {
    method: "POST",
    body: form,
  });

  const text = await resp.text();
});

bgcover.addEventListener("click", () => {
  bgcover.style.display = "none";
  workpopup.style.display = "none";
  const video = workpopup.querySelector('video');
  if (video) {
    video.pause();
    console.log(video)
  }
});

alert.addEventListener("transitionend", () => {
  setTimeout(() => {
    alert.attributeStyleMap.set("right", CSS.percent(-100));
  }, 2000);
});

blogShowMore.addEventListener("click", async () => {
  blogShowMore.dataset.key = Number(blogShowMore.dataset.key) + 1;
  const data = await fetchJson(`/getblog/${blogShowMore.dataset.key}`);

  data.posts.forEach((post) => {
    const blog = createElement(blogs, 'div', { class: 'blog' });
    const a = createElement(blog, 'a', { href: post.url, target: "_blank", rel: "noopener" });
    const img = createElement(a, 'img', { src: post.cover_image, alt: post.title });
    const title = createElement(blog, 'div', { class: 'title' }, post.title);
    const summary = createElement(blog, 'div', { class: 'summary' }, post.description);
    const icon = createElement(blog, 'a', { href: post.url, target: "_blank", rel: "noopener", class: 'blogIcon' });
    createElement(icon, 'img', { src: "img/blog/devto.svg", alt: "Devnode Logo", class: "icon" })
  })


  if (!data.hasMore) {
    blogShowMore.style.display = "none";
  }
});

InitWork()

const images = document.querySelectorAll('img');
  
images.forEach((img) => {
  img.onerror = function() {
    this.onerror = null;
    this.src = './img/quantums.png';
  };
});


console.log(`            :*#*:                
           :%@@@@@#.             
          *@@@@@@@@@*.           
        *@@@@@@@@@@@@@*          
      =@@@@@@@=.+@@@@@@@=        
    =@@@@@@@*.    *@@@@@@@:      
  :@@@@@@@#.       .#@@@@@@@=    
  %@@@@@%:           .#@@@@@@    
 :@@@@@@@#.       .#@@@@@@@:    
    =@@@@@@@*     *@@@@@@@=      
      +@@@@@@@  +@@@@@@@+        
        *@@@@:=@@@@@@@*          
         .#@=@@@@@@@#.           
           :%@@@@@%:             
              :*%*:                
                .-+=:.    
                   .%#@+.`);
