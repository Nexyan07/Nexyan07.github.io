// sistem tombol dark mode start
const toggle = document.querySelector('#toggle');
const html = document.querySelector('html');

toggle.addEventListener('click', function() {
    toggle.checked ? html.classList.add('dark') : html.classList.remove('dark');
});
// sistem tombol dark mode end

// refresh sistem start
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
// refresh sistem end

// sistem splash screen start
const splashScreen = document.querySelector('#splash-screen');
const splashTop = document.querySelector('#splash-top');
const splashBottom = document.querySelector('#splash-bottom');
let garisAtas = document.querySelector('#garis-atas');
let garisBawah = document.querySelector('#garis-bawah');

splashTop.addEventListener('animationend', function() {
    splashScreen.style.display = 'none';
    splashTop.style.display = 'none';
    splashBottom.style.display = 'none';
    garisAtas.style.display = 'none';
    garisBawah.style.display = 'none';
});
document.addEventListener("DOMContentLoaded", () => {
    const garisAtas = document.getElementById("garis-atas");
    const garisBawah = document.getElementById("garis-bawah");

    setTimeout(() => {
        const deskripsiHome = document.querySelector('.deskripsi-home');
        const heroHome = document.querySelector('.hero-home');
        const header = document.querySelector('.header');
        deskripsiHome.classList.add("animate-fadeInKanan");
        heroHome.classList.add("animate-fadeInAtas");
        header.classList.add("animate-fadeInKanan");
        garisAtas.classList.add("hidden");
        garisBawah.classList.add("hidden");
    }, 2900);
});
// sistem splash screen end

// loading start
let currentNumber = 1;
let interval = setInterval(() => {
    document.getElementById("loading").innerHTML = currentNumber + "%";
    if (currentNumber === 100) {
        clearInterval(interval);
    } else {
        currentNumber++;
    }
}, 25);

// loading end

// bahasa start

// bahasa end

// navbar start
const navbar = document.getElementById("navbar");
const navbarIcon = document.getElementById("navbar-icon");
const hamburger = document.getElementById("hamburger");
const homeIcon = document.getElementById("home");
const profileIcon = document.getElementById("profile");
const projectIcon = document.getElementById("project");
const contactIcon = document.getElementById("contact");
    navbar.addEventListener("click", function() {
    navbarIcon.classList.remove("hidden");
    navbar.classList.add("scale-[1.7]");
    navbar.classList.remove("scale-100");
    hamburger.classList.add("right-1/2");
    hamburger.classList.remove("right-0");
    home.classList.add("scale-[0.7]");
    home.classList.add("-translate-y-11");
    home.classList.add("translate-x-1");
    home.classList.remove("-translate-y-1/2");
    profileIcon.classList.remove("scale-100");
    profileIcon.classList.add("scale-[0.7]");
    profileIcon.classList.add("-translate-y-[30px]");
    profileIcon.classList.add("-translate-x-4");
    profileIcon.classList.remove("-translate-y-1/2");
    projectIcon.classList.remove("scale-100");
    projectIcon.classList.add("scale-[0.7]");
    projectIcon.classList.add("-translate-x-4");
    projectIcon.classList.remove("-translate-y-1/2");
    contactIcon.classList.remove("scale-100");
    contactIcon.classList.add("scale-[0.7]");
    contactIcon.classList.add("translate-y-[9px]");
    contactIcon.classList.add("translate-x-1");
    contactIcon.classList.remove("-translate-y-1/2");
});
document.addEventListener("click", function(event) {
    if(!navbar.contains(event.target)) {
        navbar.classList.add("scale-100");
        navbar.classList.remove("scale-[1.7]");
        hamburger.classList.remove("right-1/2");
        hamburger.classList.add("right-0");
        home.classList.remove("scale-[0.7]");
        home.classList.add("scale-100");
        home.classList.remove("-translate-y-11");
        home.classList.remove("translate-x-1");
        home.classList.add("-translate-y-1/2");
        profileIcon.classList.remove("scale-[0.7]");
        profileIcon.classList.add("scale-100");
        profileIcon.classList.remove("-translate-y-7");
        profileIcon.classList.remove("-translate-x-4");
        profileIcon.classList.add("-translate-y-1/2");
        projectIcon.classList.remove("scale-[0.7]");
        projectIcon.classList.add("scale-100");
        projectIcon.classList.remove("-translate-x-4");
        projectIcon.classList.add("-translate-y-1/2");
        contactIcon.classList.remove("scale-[0.7]");
        contactIcon.classList.add("scale-100");
        contactIcon.classList.remove("translate-y-[9px]");
        contactIcon.classList.remove("translate-x-1");
        contactIcon.classList.add("-translate-y-1/2");
        projectIcon.addEventListener("transitionend", function(event) {
            if(event.propertyName === "transform" && projectIcon.classList.contains("-translate-y-1/2")) {
                navbarIcon.classList.add("hidden");
            }
        })
    }
})
// navbar end

// animate on scroll start
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entri => {
        if(entri.isIntersecting) {
            if(entri.target.id === 'fadeInKanan') {
                entri.target.classList.add("animate-fadeInKanan");
            }
            if(entri.target.id === 'fadeInKiri') {
                entri.target.classList.add("animate-fadeInKiri");
            }
        } else {
            if(entri.target.id === 'fadeInKanan') {
                entri.target.classList.remove("animate-fadeInKanan");
            }
            if(entri.target.id === 'fadeInKiri') {
                entri.target.classList.remove("animate-fadeInKiri");
            }
        }
    });
});

const element = document.querySelectorAll('.opacity-0');
element.forEach(el => observer.observe(el));
// animate on scroll end

