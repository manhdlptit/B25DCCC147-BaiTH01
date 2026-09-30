function tabbar(tabId) {
  const tabs = document.querySelectorAll(".tabbar");
  const buttons = document.querySelectorAll(".tab-btn");

  tabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  const activeTab = document.getElementById(tabId);
  if (activeTab) {
    activeTab.classList.add("active");
  }

  const currentBtn = Array.from(buttons).find((btn) =>
    btn.getAttribute("onclick").includes(tabId),
  );
  if (currentBtn) {
    currentBtn.classList.add("active");
  }
}

const themeToggleBtn = document.getElementById("theme-toggle");
themeToggleBtn.addEventListener("click", () => {
  const body = document.body;
  const icon = themeToggleBtn.querySelector("i");

  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.className = "fa-solid fa-moon";
  } else {
    icon.className = "fa-solid fa-sun";
  }
});

document.getElementById("current-year").textContent = new Date().getFullYear();

function filterProjects() {
  const searchInput = document
    .getElementById("project-search")
    .value.toLowerCase();
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    if (text.includes(searchInput)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
