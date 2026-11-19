/* Light / dark theme */
const root = document.documentElement;
const themeButton = document.getElementById("theme-toggle");

const updateThemeIcon = () => {
    const isDark = root.dataset.theme === "dark";
    themeButton.querySelector("i").className = isDark ? "bi bi-sun" : "bi bi-moon-stars";
    themeButton.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
};

themeButton.addEventListener("click", () => {
    const newTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);   
    updateThemeIcon();
});

updateThemeIcon();


/* Mobile menu */
const menuButton = document.getElementById("menu-toggle");
const navLinksBox = document.getElementById("nav-links");

const setMenu = (open) => {
    navLinksBox.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", open);
};

menuButton.addEventListener("click", () => {
    setMenu(!navLinksBox.classList.contains("open"));
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setMenu(false);
});


/* Highlight the nav link of the section in view */
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

navLinks.forEach(link => link.addEventListener("click", () => setMenu(false)));

const setActive = (id) => {
    navLinks.forEach(link =>
        link.classList.toggle("active", link.getAttribute("href") === `#${id}`)
    );
};

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) setActive(entry.target.id);
        });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);

sections.forEach(section => observer.observe(section));


/*  Copyright year in the footer  */
const footerText = document.querySelector("footer p");
if (footerText) {
    footerText.textContent = `© ${new Date().getFullYear()} Iva.`;
}
