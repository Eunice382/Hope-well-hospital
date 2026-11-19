

const menuToggle = document.getElementById("menu-toggle");

const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", function() {

    if (navbar.style.display === "flex") {

        navbar.style.display = "none";

    } else {

        navbar.style.display = "flex";

    }

});

 



const appointmentForm = document.getElementById("appointment-form");

appointmentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const patientName = document.getElementById("patient-name").value;

    document.getElementById("form-message").textContent =
        "Thank you, " + patientName +
        "! Your appointment request has been received.";

    appointmentForm.reset();

});

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function() {

    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");

    preloader.style.display = "none";
});
const revealElements = document.querySelectorAll(
    ".about, .services, .doctors, .gallery, .testimonials, .faq, .contact"
);

function revealOnScroll() {
    revealElements.forEach(function(element) {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(function(link) {
        link.classList.remove("active-link");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active-link");
        }
    });

});
const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = (scrollTop / pageHeight) * 100;

    progressBar.style.width = progress + "%";
});
const themeToggle = document.getElementById("theme-toggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
}

// Change theme
themeToggle.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        localStorage.setItem("theme", "dark");
        themeToggle.textContent = "☀️ Light Mode";

    } else {

        localStorage.setItem("theme", "light");
        themeToggle.textContent = "🌙 Dark Mode";

    }

});
const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter) {

    const target = Number(counter.dataset.target);
    let count = 0;

    const increment = Math.ceil(target / 100);

    const updateCounter = setInterval(function() {

        count += increment;

        if (count >= target) {
            count = target;
            clearInterval(updateCounter);
        }

        counter.textContent = count.toLocaleString();

    }, 30);

});
const newsletterForm = document.getElementById("newsletter-form");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("newsletter-email").value;

    document.getElementById("newsletter-message").textContent =
        "Thank you! Your subscription request has been received.";

    newsletterForm.reset();

});