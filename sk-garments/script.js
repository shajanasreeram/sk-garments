// =========================================
// SK GARMENTS — WEBSITE INTERACTIONS
// =========================================

// Smooth reveal animation when sections enter the screen

const revealElements = document.querySelectorAll(
    ".service-card, .process-item, .product-card, .gallery-box, .why-grid > div, .stat"
);

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("navbar-scrolled");
    } else {
        navbar.classList.remove("navbar-scrolled");
    }

});


// =========================================
// CURRENT YEAR IN FOOTER
// =========================================

const footerYear = document.querySelector("footer > p");

if (footerYear) {
    footerYear.innerHTML =
        `© ${new Date().getFullYear()} SK Garments. All Rights Reserved.`;
}


// =========================================
// BUTTON CLICK FEEDBACK
// =========================================

const quoteButtons = document.querySelectorAll(
    'a[href="#contact"]'
);

quoteButtons.forEach((button) => {

    button.addEventListener("click", () => {

        setTimeout(() => {
            const contactSection =
                document.querySelector("#contact");

            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }, 50);

    });

});
