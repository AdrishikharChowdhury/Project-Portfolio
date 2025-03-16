let toggle = document.querySelector("#toggle");
let toggler = document.querySelector(".toggle-button");
let pic1="./assets/images/pic1.jpg";
let pic2="./assets/images/pic2.jpg";
let pic3="./assets/images/pic3.jpg";

document.getElementById("download").addEventListener("click", function () {
    let pdfPath = "./assets/pdfs/Adrishikhar-Chowdhury_Resume.pdf";
    let link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Adrishikhar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.addEventListener("DOMContentLoaded", function () {
    let picture1 = document.getElementById("pic1");
    slideshow(picture1)
});

function slideshow(picture1){
    if (!picture1) return;
    let images = [pic1,pic2,pic3];
    let currentIndex = 0;

    function changeImage() {
        picture1.style.opacity = "0"; // Fade out
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

function toggleMenu() {
    let menu = document.querySelector("#mobileMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

// Event listener for clicking anywhere outside the mobile menu or hamburger button
document.addEventListener("click", function (event) {
    let menu = document.querySelector("#mobileMenu");
    let hamburger = document.querySelector(".hamburger");

    // Close the mobile menu if the click is outside the menu or hamburger button
    if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});


document.addEventListener("DOMContentLoaded", function () {
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }

    document.getElementById("toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
