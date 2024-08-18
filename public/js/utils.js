const foregroundCanvas = document.getElementById('foreground')
foregroundCanvas.width = window.innerWidth;
foregroundCanvas.height = window.innerHeight;

const foregroundCtx = foregroundCanvas.getContext('2d');
foregroundCtx.filStyle = "white";
foregroundCtx.textAlign = "center";

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


export function showAlert(text, error=true) {
    const textMetric = foregroundCtx.measureText(text);
    console.log(textMetric.width * 2);
    foregroundCtx.fillStyle = 'rgb(0,0,0, 0.8)';
    foregroundCtx.fillRect(innerWidth * 0.05, innerHeight * 0.4, innerWidth * 0.9, innerHeight * 0.2)
    foregroundCtx.fillStyle = error ? 'red' : 'springgreen';
    foregroundCtx.font = "bold 20px Monospace";
    const type = error ? 'error' : 'success';
    foregroundCtx.fillText(type, innerWidth/2, innerHeight/2 - 20);
    foregroundCtx.fillStyle = error ? 'brown' : 'white';
    foregroundCtx.font = "bold 2vw serif";
    foregroundCtx.fillText(text, innerWidth/2, innerHeight/2 + 20);
    setTimeout(()=>{
      foregroundCtx.clearRect(0, 0, innerWidth, innerHeight);
    }, textMetric.width < 100 ? textMetric.width * 20 : textMetric.width * 10)
}

// Function to validate if a link is a Github URL
export function isGitHubLink(url) {
  const gitHubRegex =
    /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+(\/)?$/;
  return gitHubRegex.test(url);
}

// Function to validate if a link is a Figma URL
export function isFigmaLink(url) {
  const figmaRegex = /^(https?:\/\/)?(www\.)?figma\.com\/design\/[A-Za-z0-9]+\/[A-Za-z0-9_-]+(\?.*)?$/;
  return figmaRegex.test(url);
}
