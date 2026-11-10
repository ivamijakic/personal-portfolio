/* Highlight the nav link of the section currently in view */
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const sections = document.querySelectorAll("main section");

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

/* Update the copyright year in the footer */
const footerText = document.querySelector("footer p");
if (footerText) {
    footerText.textContent = `© ${new Date().getFullYear()} Iva.`;
}