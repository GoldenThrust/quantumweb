// Import utility functions
import createElement, {
  getDragAfterElement,
  isFigmaLink,
  isGitHubLink,
  showAlert,
} from "../../js/utils.js";

// DOM element selectors
const projectsContainer = document.getElementById("projects");
const editProject = document.querySelectorAll(".edit-project");
const deleteProject = document.querySelectorAll(".delete-project");
const refreshProject = document.querySelectorAll(".refresh-project");
const projectToolsInput = document.querySelectorAll("form input[list=tools]");
const forms = document.querySelectorAll(".project-edit");
const projectCreateBG = document.getElementById("project-create-bg");
const footer = document.querySelector("footer");
const projectCreate = document.querySelector(".project-create");
const alert = document.getElementById("alert");
const dialog = document.querySelector("dialog");
const deleteProjectButton = document.getElementById("delete-project");

// Function to remove tools
function removeTools(e, elem) {
  if (e.target.nodeName == "SPAN") {
    const key = elem.dataset.key;
    e.target.remove();
  }
}

// Function to add tools
function addTools(e) {
  if (e.key === " " || e.key === "Shift") {
    const value = e.target.value;
    if (value && value !== " ") {
      const project = e.target.closest(".project-edit")
        ? e.target.closest(".project-edit")
        : e.target.closest(".project-create");
      const projectLists = project.querySelector("div>div");
      const projectListsLen = projectLists.querySelectorAll("span").length;
      const span = createElement(
        projectLists,
        "span",
        {
          "data-key": projectListsLen,
        },
        value
      );

      span.addEventListener("click", (e) => removeTools(e, e.target));
      e.target.value = "";
    } else {
      e.target.value = "";
    }
  }
}

// Function to update the keys of projects after rearranging
async function updateKeys() {
  const projectIDKey = {};
  const projects = projectsContainer.querySelectorAll(".project");
  projects.forEach((project, index) => {
    if (Number(project.dataset.key) !== index) {
      project.dataset.key = index;

      projectIDKey[project.id] = index;
    }
  });

  const resp = await fetch("/project/changekey", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: projectIDKey }),
  });

  if (!resp.ok) {
    const err = await resp.json();
    showAlert(err.error);
    return;
  }
}

export default function initProject() {
  // Show project creation background on footer click
  footer.addEventListener("click", () => {
    projectCreateBG.style.display = "flex";
  });

  // Hide project creation background on click outside the creation form
  projectCreateBG.addEventListener("click", (e) => {
    if (e.target == projectCreateBG) {
      e.target.style.display = "none";
    }
  });

  refreshProject.forEach((elem) => {
    elem.addEventListener("click", async (e) => {
      const projectKey = e.target.closest(".project").dataset.key;
      const id = e.target.closest(".project").id;

      const response = await fetch('/project/refresh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
      })

      if (!response.ok) {
        const err = await response.json();
        showAlert(err.error);
        return;
      }
    
      showAlert(`Project ${projectKey} refreshed`);
    });
  });

  // Form submission handling
  forms.forEach((elem) => {
    const div = elem.querySelector("div div");
  
    elem.addEventListener("submit", async (e) => {
      const id = elem.closest(".project").id;
      const span = div.querySelectorAll("span");



      const project = {};
      e.preventDefault();

      const formData = new FormData(elem);
      for (const [key, value] of formData) {
        if (!value && key !== "figma-link") {
          const err = await response.json();
          showAlert(err.error);
          return;
        }

        if (key === "git-link" && !isGitHubLink(value)) {
          showAlert("Please enter a valid GitHub link.");
          return;
        }

        if (value && key === "figma-link" && !isFigmaLink(value)) {
          showAlert("Please enter a valid Figma link.");
          return;
        }

        project[key] = value;
      }


      span.forEach((el) => {
        if (project["tools"]) project["tools"].push(el.textContent);
        else project["tools"] = [el.textContent];
      });

      const response = await fetch("/project/update", {
        method: "POST",
        body: JSON.stringify({id, project}),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const err = await response.json();
        showAlert(err.error);
        return;
      }

      window.location.reload();
    });

    div.addEventListener("click", (e) => removeTools(e, div), true);
  });

  // Add tools on keydown event
  projectToolsInput.forEach((elem) => {
    elem.addEventListener("keydown", addTools);
  });

  // Delete project on delete button click
  deleteProject.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const project = e.target.closest(".project");
      const id = project.id;
      dialog.id = id;
      dialog.showModal();
    });
  });

  deleteProjectButton.addEventListener("click", async (e) => {
    const id = dialog.id;
    const project = document.getElementById(id);
    const response = await fetch('/project/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id })
    })

    if (!response.ok) {
      const err = await response.json();
      showAlert(err.error);
      return;
    } else {
      project.remove();
      showAlert(`Project ${projectKey} deleted`);
      dialog.id = "";
    }
  });

  // Edit project on edit button click
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

  // Drag and drop handling
  projectsContainer.addEventListener("dragstart", (e) => {
    if (e.target.classList.contains("project")) {
      e.target.classList.add("dragging");
    }
  });

  projectsContainer.addEventListener("dragend", (e) => {
    if (e.target.classList.contains("project")) {
      e.target.classList.remove("dragging");
      updateKeys();
      showAlert(`Project key updated successfully`);
    }
  });

  projectsContainer.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(projectsContainer, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      projectsContainer.appendChild(draggable);
    } else {
      projectsContainer.insertBefore(draggable, afterElement);
    }
  });

  projectCreate.addEventListener("submit", async (e) => {
    const projectsLen = projectsContainer.querySelectorAll(".project").length;

    const project = {
      key: projectsLen,
    };

    e.preventDefault();

    const formData = new FormData(e.target);
    for (const [key, value] of formData) {
      project[key] = value;

      if (key == "git-link" && !isGitHubLink(value)) {
        showAlert("Please enter a valid GitHub link.");
        return;
      }

      if (value && key === "figma-link" && !isFigmaLink(value)) {
        showAlert("Please enter a valid Figma link.");
        return;
      }
    }

    const span = e.target.querySelectorAll("div div span");

    span.forEach((el) => {
      if (project["tools"]) project["tools"].push(el.textContent);
      else project["tools"] = [el.textContent];
    });

    if (!project["tools"]) {
      showAlert("Please add at least one tool.");
      return;
    }

    // Create new project with AJAX
    const response = await fetch("/project/create", {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error();
      console.log(`HTTP error! status: ${response.status}`);
    }

    window.location.reload();
  });
}
