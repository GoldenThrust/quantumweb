import createElement, { showAlert } from "../../views/js/utils.js";
const aside = document.querySelector("aside");
const footer = document.querySelector("footer");

let windowWidth = window.innerWidth;

if (windowWidth < 768) aside.attributeStyleMap.set("left", CSS.px(-30));

const pathname = window.location.pathname.split("/").pop();

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

const projectsContainer = document.getElementById('projects');
const editProject = document.querySelectorAll(".edit-project");
const deleteProject = document.querySelectorAll(".delete-project");
const projectToolsInput = document.querySelectorAll("form input[list=tools]");
const forms = document.querySelectorAll(".project-edit");
const projectCreateBG = document.getElementById("project-create-bg");
const projectCreate = document.querySelector(".project-create");
const projectCreateTools = document.querySelector(".project-create input[list=tools]");

footer.addEventListener("click", ()=> {
  projectCreateBG.style.display = "flex";
})

projectCreateBG.addEventListener("click", (e) => {
  if (e.target == projectCreateBG) {
    e.target.style.display = "none";
  }
})

function removeTools(e, elem) {
    const key = elem.dataset.key;
    console.log(key);
    e.target.remove()
}

function addTools(e) {
  if (e.key === " " || e.key === "Shift") {
    e.preventDefault();
    console.log(e.value);
    const value = e.target.value;
    if (value) {
      const project = e.target.closest(".project-edit") ? e.target.closest(".project-edit"): e.target.closest(".project-create");

      const projectLists = project.querySelector("div>div");
      const projectListsLen = projectLists.querySelectorAll("span").length;

      const span = createElement(projectLists, "span", {
          "data-key": projectListsLen,
        }, value);

      span.addEventListener("click", (e) => removeTools(e, e.target));
      e.target.value = "";
    }
  }
}

forms.forEach((elem) => {
  const project = {};
  const span = elem.querySelectorAll("div div span");

  elem.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(elem);
    for (const [key, value] of formData) {
      if (!value) {
        showAlert("Please fill in all required fields.");
        return window.location.reload();
      }
      project[key] = value;
    }

    span.forEach((el) => {
      if (project["tools"]) project["tools"].push(el.textContent);
      else project["tools"] = [el.textContent];
    });

    window.location.reload();
  });

  span.forEach((el) => {
    el.addEventListener("click", (e) => removeTools(e, el));
  });
});


projectCreateTools.addEventListener("keydown", addTools)
projectToolsInput.forEach((elem) => {
  elem.addEventListener("keydown", addTools);
});



deleteProject.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const project = e.target.closest(".project");
    const key = project.dataset.key;
    console.log(key);
    project.remove();
  });
});

editProject.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    const AllCreate = document.querySelectorAll("#projects .project");

    AllCreate.forEach((elem) => {
      const view = elem.querySelector(".project-view");
      if (view.style.display === "none") {
        const create = elem.querySelector(".project-edit");

        view.style.display = "flex";
        create.style.display = "none";
      }
    });

    const project = e.target.closest(".project");
    const view = project.querySelector(".project-view");
    const create = project.querySelector(".project-edit");

    view.style.display = "none";
    create.style.display = "flex";
  });
});


projectsContainer.addEventListener('dragstart', (e) => {
  if (e.target.classList.contains('project')) {
    e.target.classList.add('dragging');
  }
});

projectsContainer.addEventListener('dragend', (e) => {
  if (e.target.classList.contains('project')) {
    e.target.classList.remove('dragging');
    updateKeys();
    const key = e.target.dataset.key;
  }
});

projectsContainer.addEventListener('dragover', (e) => {
  e.preventDefault();
  const afterElement = getDragAfterElement(projectsContainer, e.clientY);
  const draggable = document.querySelector('.dragging');
  if (afterElement == null) {
    projectsContainer.appendChild(draggable);
  } else {
    projectsContainer.insertBefore(draggable, afterElement);
  }
});

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.project:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function updateKeys() {
  const projects = projectsContainer.querySelectorAll('.project');
  projects.forEach((project, index) => {
    project.dataset.key = index + 1;
  });
}

const request = await fetch("https://ipinfo.io/json?token=")
const jsonResponse = await request.json()

console.log(jsonResponse)