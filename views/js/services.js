const attachment = document.getElementById("files");
const attachmentInfo = document.getElementById("attachment-info");
const request = indexedDB.open("quantumServiceDB", 1);

const fromPrice = document.querySelector('#from-price');
const toPrice = document.querySelector('#to-price');
toPrice.setAttribute('min', Number(fromPrice.value));

let formStore = JSON.parse(localStorage.getItem('servicesForm'));
const sections = document.querySelectorAll('.service-request-form');
const nextButton = document.querySelector('button[type="submit"]');
const backButton = document.querySelector('button[type="button"]');
let forms = document.forms[0].querySelectorAll("label>*");
let currentSection = 0;


attachment.addEventListener("change", function () {
    const files = attachment.files;
    let filesSize = 0;
    let filesName = "";
    Object.values(files).forEach((file) => {
        filesSize += file.size;
        filesName += `"${file.name}" `
    })

    if (filesSize > (10 * 1024 * 1024)) {
        alert("File size exceeds 10MB. Please select a smaller file.");
        attachment.value = ""; // Clear the input
        attachmentInfo.textContent = "No file selected";
    } else {
        attachmentInfo.textContent = filesName;
    }
});

if (formStore) {
    forms.forEach((elem) => {
        if (elem.name && formStore[elem.name]) {
            elem.value = formStore[elem.name];
        }
    })
} else {
    formStore = {};
}

fromPrice.addEventListener('input', (e) => {
    toPrice.setAttribute('min', Number(fromPrice.value));
})

nextButton.addEventListener('click', (e) => {
    let error = false;
    sections[currentSection].querySelectorAll("label>*").forEach((elem) => {
        if (elem.value !== undefined && !elem.value) {
            elem.style.border = "1px solid red";
            error = true;
        } else {
            formStore[elem.name] = elem.value;
        }
    })

    if (!error) {
        if (currentSection < sections.length - 1) {
            e.preventDefault();
            sections[currentSection].attributeStyleMap.set("left", CSS.percent(-100));
            sections[currentSection + 1].attributeStyleMap.set("left", CSS.percent(0));
            currentSection++;
        }

        if (currentSection === sections.length - 1) {
            nextButton.textContent = 'Submit';
        }

        localStorage.setItem('servicesForm', JSON.stringify(formStore));
    }
});

nextButton.addEventListener('submit', () => {
    if (forms)
    localStorage.removeItem('servicesForm');
})

backButton.addEventListener('click', (e) => {
    if (currentSection > 0) {
        e.preventDefault();
        sections[currentSection].attributeStyleMap.set("left", CSS.percent(100));
        sections[currentSection - 1].attributeStyleMap.set("left", CSS.percent(0));
        currentSection--;
    }

    if (currentSection < sections.length - 1) {
        nextButton.textContent = 'Next';
    }
});

