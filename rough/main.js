document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.service-request-form');
    const nextButton = document.querySelector('button[type="button"]');
    const backButton = document.querySelector('button[type="button"]:first-of-type');
    let currentSection = 0;
  
    nextButton.addEventListener('click', () => {
      if (currentSection < sections.length - 1) {
        sections[currentSection].style.display = 'none';
        currentSection++;
        sections[currentSection].style.display = 'block';
      } 
      if (currentSection === sections.length - 1) {
        nextButton.textContent = 'Submit';
      }
    });
  
    backButton.addEventListener('click', () => {
      if (currentSection > 0) {
        sections[currentSection].style.display = 'none';
        currentSection--;
        sections[currentSection].style.display = 'block';
      }
      if (currentSection < sections.length - 1) {
        nextButton.textContent = 'Next';
      }
    });
  });
  