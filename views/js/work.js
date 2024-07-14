import { toolsTechImage } from "./constant.js";
import createElement, { checkChildOverflow } from "./utils.js";

const worksContainer = document.querySelector("#workpopup");

export async function getWork(id) {
  console.time("works");
  worksContainer.innerText = "";

  try {
    const response = await fetch(`/repos/${id}`);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    const video = createElement(worksContainer, "video", {
      poster: `portfolioimage/${data.thumbnail}`,
      src: `portfoliovideo/${data.trailer}`,
    });

    video.addEventListener("mouseover", () => {
      video.play();
    });

    video.addEventListener("mouseout", () => {
      video.pause();
    });

    createElement(worksContainer, "h3", {}, data.name);
    const star = data.star ? createElement(worksContainer, "aside", {}, data.star) : '';
    console.log(star);

    createElement(worksContainer, "p", {}, data.description);

    const workTools = createElement(worksContainer, "div", {
      id: "work-tools-and-tech",
    });

    const h4 = createElement(workTools, "h4", {}, "Tools and Technologies");

    const workSlide = createElement(workTools, "div", {
      id: "work-slide-container",
    });

    const slide = createElement(workSlide, "div", { class: "slide" });

    data.tools.split("-").forEach((tool) => {
      createElement(slide, "img", {
        src: `./img/toolsandlanguage/${
          toolsTechImage[tool.toLowerCase().trim()]
        }`,
        alt: tool,
      });
    });

    const slideClone = slide.cloneNode(true);
    workSlide.appendChild(slideClone);

    const figmaEmbed = createElement(worksContainer, "div", {
      class: "figma-embed",
    });

    if (data.figma !== null) {
      createElement(figmaEmbed, "iframe", {
        src: `https://www.figma.com/embed?embed_host=share&url=${data.figma}`,
        allowfullscreen: true,
        width: "800",
        height: "450",
      });
    }


    if (checkChildOverflow(workSlide)) {
      slide.classList.add("animate-slide");
      slideClone.classList.add("animate-slide");
    } else {
      workSlide.removeChild(slideClone);
    }

    if (data.url || data.homepageUrl) {
      const link = createElement(worksContainer, 'div', {class: 'link'});
      
      if (data.homepageUrl) {
        const homepageUrl = createElement(link, 'a', {href: data.homepageUrl, target: '_blank'})
        createElement(homepageUrl, 'img', {src: "./img/live.png"})
      }

      if (data.url) {
        const url = createElement(link, 'a', {href: data.url, target: '_blank'})
        createElement(url, 'img', {src: "./img/github.png"})
      }
    }

    console.timeEnd("works");
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
