/* Change active link based on scroll position */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const sections = document.querySelectorAll("main section");

function changeActiveLink(sectionId) {
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
        }

    });

}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            changeActiveLink(entry.target.id);
        }
    });
}, {
    root: null,
    threshold: 0.3
});


sections.forEach(section => {
    observer.observe(section);
});
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

/* Footer year */
const footerText = document.querySelector("footer p");
if (footerText) {
    footerText.textContent = `© ${new Date().getFullYear()} Iva.`;
}
navLinks.forEach(link => {
    link.addEventListener("click", function() {
        const sectionId = this.getAttribute("href").substring(1);
        changeActiveLink(sectionId);
    });
});

/* Automaticaly change copyright year in footer */
const currentYear = new Date().getFullYear();
const copyrightElement = document.querySelector("footer p");
copyrightElement.innerHTML = `&copy; ${currentYear} Iva.`;