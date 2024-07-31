const alert = document.getElementById("alert");

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
  const gitHubRegex =
    /^(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+(\/)?$/;
  return gitHubRegex.test(url);
}

// Function to validate if a link is a Figma URL
export function isFigmaLink(url) {
  const figmaRegex = /^(https?:\/\/)?(www\.)?figma\.com\/design\/[A-Za-z0-9]+\/[A-Za-z0-9_-]+(\?.*)?$/;
  return figmaRegex.test(url);
}
