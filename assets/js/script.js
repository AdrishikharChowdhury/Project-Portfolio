let toggle = document.querySelector("#toggle");
let toggler = document.querySelector(".toggle-button");

document.addEventListener("DOMContentLoaded", function () {
    // ✅ Dark Mode: Load from localStorage
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // ✅ Toggle Dark Mode
    if (toggle) {
        toggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
    // ✅ Resume Download
    let downloadBtn = document.getElementById("download");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
            let pdfPath = "./assets/pdfs/Adrishikhar-Chowdhury_Resume.pdf";
            let link = document.createElement("a");
            link.href = pdfPath;
            link.download = "Adrishikhar_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // ✅ SoS Certificate Download
    let sosBtn = document.getElementById("sos");
    if (sosBtn) {
        sosBtn.addEventListener("click", function () {
            let pdfPath = "./assets/pdfs/Adrishikhar Chowdhury,  Certificate of Appreciation.pdf";
            let link = document.createElement("a");
            link.href = pdfPath;
            link.download = "SoS_AC_Certificate.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // ✅ Slideshow Init
    let picture1 = document.getElementById("pic1");
    if (picture1) {
        slideshow(picture1);
    }
});

// ✅ Slideshow Function
function slideshow(picture1) {
    let pic1 = "./assets/images/pic1.jpg";
    let pic2 = "./assets/images/pic2.jpg";
    let pic3 = "./assets/images/pic3.jpg";
    let pic4 = "./assets/images/pic4.jpg";

    let images = [pic1, pic2, pic3, pic4];
    let currentIndex = 0;

    function changeImage() {
        picture1.style.opacity = "0";
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % images.length;
            picture1.style.backgroundImage = `url('${images[currentIndex]}')`;
            picture1.style.opacity = "1";
        }, 500);
    }

    picture1.style.transition = "opacity 0.5s ease-in-out";
    picture1.style.backgroundImage = `url('${images[currentIndex]}')`;
    setInterval(changeImage, 25000);
}

// ✅ Mobile Menu Toggle Function
function toggleMenu() {
    let menu = document.querySelector("#mobileMenu");
    if (menu) {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    }
}

// ✅ Close mobile menu on outside click
document.addEventListener("click", function (event) {
    let menu = document.querySelector("#mobileMenu");
    let hamburger = document.querySelector(".hamburger");

    if (menu && hamburger && !hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});
