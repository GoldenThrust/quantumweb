const alert = document.getElementById("alert");

const specialization = document.querySelector(".specialization");
const professions = [
  "Full-Stack Web Developer",
  "Software Engineer",
  "Data Scientist",
];
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
  const NavBar = document.querySelector(".headerNav");

  let mouseStart = null;

  window.addEventListener("touchstart", (e) => {
    mouseStart = e.touches[0].clientX;
  });

  window.addEventListener("touchmove", (e) => {
    const dx = e.touches[0].clientX - mouseStart;

    if (mouseStart < 30) {
      if (dx > 10) {
        NavBar.attributeStyleMap.set("left", CSS.percent(0));
      }
    } else if (
      NavBar.attributeStyleMap.get("left").value === 0
    ) {
      if (dx < 0) {
        NavBar.attributeStyleMap.set("left", CSS.percent(-100));
      }
    }
  });

  window.addEventListener("touchend", (e) => {
    mouseStart = null;
  });
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

export function showAlert(text) {
  alert.innerText = text;
  alert.attributeStyleMap.set("right", CSS.percent(0));
}

export function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".project:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}

// Function to validate if a link is a Github URL
export function isGitHubLink(url) {
  const gitHubRegex = /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+(\/)?$/;
  return gitHubRegex.test(url);
}

// Function to validate if a link is a Figma URL
export function isFigmaLink(url) {
  const figmaRegex = /^(https?:\/\/)?(www\.)?figma\.com\/design\/[A-Za-z0-9]+\/[A-Za-z0-9_-]+(\/)?$/;
  return figmaRegex.test(url);
}