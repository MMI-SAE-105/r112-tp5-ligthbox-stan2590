// *** LIGHTBOX ***

document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = lightbox.querySelector("img");

    document.querySelectorAll("ul li img").forEach((img) => {
        img.addEventListener("click", () => {
            const fullImgSrc = img.getAttribute("data-full-img");
            lightboxImage.src = fullImgSrc;
            lightbox.classList.add("open");
        });
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox || e.target.tagName === "DIALOG") {
            lightbox.classList.remove("open");
            lightboxImage.src = ""; 
        }
    });
});