const companyName = "Be Bold"

const companyNameElements = document.querySelectorAll(".company-name")

companyNameElements.forEach(el => {
    el.textContent = `Copyright © 2025 ${companyName}`;
  });