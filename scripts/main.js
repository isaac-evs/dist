/* Parallax */
let text = document.getElementById("text");
let planet1 = document.getElementById("planet1");
let planet2 = document.getElementById("planet2");
let planet3 = document.getElementById("planet3");
let planet4 = document.getElementById("planet4");
window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = `${value * 2.5}px`;
    planet1.style.marginTop = `${value * 0.5}px`;
    planet2.style.marginLeft = `${value * 1.0}px`;
    planet3.style.marginLeft = `${value * -1.0}px`;
    planet4.style.marginTop = `${value * -0.5}px`;
});
/* Mobile View */
function toggleMobileMenu() {
    const mobileNav = document.querySelector(".mobile-nav-links");
    if (mobileNav) {
        mobileNav.classList.toggle("show");
    }
}
function updateImagesForMobile() {
    const images = document.querySelectorAll(".planet-image");
    images.forEach((image, index) => {
        const mobileSrc = `media/planet${index + 1}mobile.png`;
        const desktopSrc = `media/planet${index + 1}.png`;
        if (window.innerWidth <= 768) {
            image.src = mobileSrc;
        }
        else {
            image.src = desktopSrc;
        }
    });
}
updateImagesForMobile();
window.addEventListener("resize", updateImagesForMobile);