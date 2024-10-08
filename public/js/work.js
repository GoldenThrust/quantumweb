import { toolsTechImage } from "./constant.js";
import createElement, { checkChildOverflow, fetchJson } from "./utils.js";

const workShowMore = document.querySelector("#works>.show-more");
let works = document.querySelector("#works>.works");
// let worksOverlay = document.querySelector("#works>.works>.overlay");
const worksContainer = document.querySelector("#workpopup");
const bgcover = document.getElementById("bgcover");
const workpopup = document.getElementById("workpopup");
const loader = document.getElementById("loader");

function displayWork(e) {
  if (e.target.className === "overlay") {
    getWork(e.target.dataset.key);
    loader.style.display = 'grid';
    bgcover.style.display = "block";
  }
}



function createProjectElement(container, tag, attributes = {}, textContent = '') {
  const element = createElement(container, tag, attributes, textContent);
  return element;
}

function createToolsAndTechnologiesSection(container, tools) {
  const workTools = createProjectElement(container, "div", { id: "work-tools-and-tech" });
  createProjectElement(workTools, "h4", {}, "Tools and Technologies");

  const workSlide = createProjectElement(workTools, "div", { id: "work-slide-container" });
  const slide = createProjectElement(workSlide, "div", { class: "slide" });

  tools.forEach(tool => {
    createProjectElement(slide, "img", {
      src: `./img/toolsandlanguage/${toolsTechImage[tool.toLowerCase().trim()]}`,
      alt: tool,
    });
  });

  const slideClone = slide.cloneNode(true);
  workSlide.appendChild(slideClone);

  if (checkChildOverflow(workSlide)) {
    slide.classList.add("animate-slide");
    slideClone.classList.add("animate-slide");
  } else {
    workSlide.removeChild(slideClone);
  }
}

export async function getWork(id) {
  try {
    const data = await fetchJson(`/project/getproject/${id}`);
    worksContainer.innerText = "";

    if (data.hasvideo) {
      const video = createProjectElement(worksContainer, "video", {
        poster: `portfolioimage/${data.preview}.jpg`,
        src: `portfoliovideo/${data.preview}.mp4`,
        loop: true
      });

      video.addEventListener("loadedmetadata", () => {
        video.play();
      });
    } else {
      createProjectElement(worksContainer, "img", {
        src: `portfolioimage/${data.preview}.jpg`,
        alt: data.name,
      });
    }


    createProjectElement(worksContainer, "h3", {}, data.name);

    if (data.stars) {
      createProjectElement(worksContainer, "aside", {}, data.stars);
    }

    createProjectElement(worksContainer, "p", {}, data.description);
    createToolsAndTechnologiesSection(worksContainer, data.tools);

    if (data.figma) {
      const figmaEmbed = createProjectElement(worksContainer, "div", { class: "figma-embed" });
      createProjectElement(figmaEmbed, "iframe", {
        src: `https://www.figma.com/embed?embed_host=share&url=${data.figma}`,
        allowfullscreen: true,
        width: "800",
        height: "450",
      });
    }

    if (data.url || data.homepage) {
      const link = createProjectElement(worksContainer, "div", { class: "link" });
      if (data.homepage) {
        const homepageUrl = createProjectElement(link, "a", {
          href: data.homepage,
          target: "_blank",
        });
        createProjectElement(homepageUrl, "img", { src: "./img/live.png" });
      }
      if (data.url) {
        const url = createProjectElement(link, "a", {
          href: data.url,
          target: "_blank",
          rel: "noopener"
        });
        createProjectElement(url, "img", { src: "./img/github.png" });
      }
    }

    bgcover.style.display = "block";
    workpopup.style.display = "block";
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    bgcover.style.display = "none";
  }

  loader.style.display = 'none';
}

export default function InitWork() {
  workShowMore.addEventListener("click", async () => {
    workShowMore.dataset.key = Number(workShowMore.dataset.key) + 1;
    const data = await fetchJson(`/project/getprojects/${workShowMore.dataset.key}`);
    const project = data.project;

    project.forEach(data => {
      const span = createProjectElement(works, "span", { class: "highlight" });
      if (data.hasvideo) {
        createProjectElement(span, "video", {
          src: `portfoliovideo/${data.preview}.mp4`,
          poster: `portfolioimage/${data.preview}.jpg`,
          muted: "true",
        });
      } else {
        createProjectElement(span, "img", {
          src: `portfolioimage/${data.preview}.jpg`,
          alt: data.name,
        });
      }
      createProjectElement(span, "div", { class: "workname" }, data.name);

      const overlay = createElement(span, "div", { class: "overlay", "data-key": data.key })
      createElement(overlay, "p", {}, "Click to View Project")
    });

    if (!data.hasMore) {
      workShowMore.style.display = "none";
    }
  });

  works.addEventListener("click", displayWork);
}
