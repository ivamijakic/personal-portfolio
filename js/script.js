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

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        const sectionId = this.getAttribute("href").substring(1);
        changeActiveLink(sectionId);
    });
});
