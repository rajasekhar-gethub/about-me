document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const bannerContent = document.querySelector('.banner-content');
    
    // Add a class to start animations after loading
    bannerContent.style.opacity = 1;
});

window.onscroll = function() {
    stickyHeader();
};

const header = document.getElementById("header");
const sticky = header.offsetTop; // Get the offset position of the header

function stickyHeader() {
    if (window.pageYOffset > 100) { // When the scroll is more than 100px
        header.classList.add("sticky"); // Add the sticky class
    } else {
        header.classList.remove("sticky"); // Remove the sticky class
    }
}
