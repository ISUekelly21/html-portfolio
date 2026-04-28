const toggleBtn = document.getElementById("darkModeToggle");

// Apply saved theme on load
window.onload = () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        toggleBtn.textContent = "Switch to Dark Mode";
    } else {
        toggleBtn.textContent = "Switch to Light Mode";
    }
};

// Toggle theme
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLight = document.body.classList.contains("light-mode");

    if (isLight) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "Switch to Dark Mode";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "Switch to Light Mode";
    }
});

// Contact form interaction
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message sent! (Demo only)");
    });
}