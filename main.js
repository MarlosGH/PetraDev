const imgs = ["imgs/banner.png", "imgs/banner2.png"];
let index = 0;
const imgCarrusel = document.querySelector(".img-carrusel");
const indicators = document.querySelectorAll(".img-round-position");

function updateImage() {
    imgCarrusel.style.opacity = 0;
    setTimeout(() => {
        imgCarrusel.setAttribute('src', imgs[index]);
        imgCarrusel.style.opacity = 1;
        updateIndicators();
    }, 400); // Ajusta este valor para que coincida con la duración de la transición en CSS
}

function updateIndicators() {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("here", index === i);
        indicator.classList.toggle("no-here", index !== i);
    });
}

document.getElementById("next").addEventListener("click", () => {
    index = (index + 1) % imgs.length;
    updateImage();
});

document.getElementById("prev").addEventListener("click", () => {
    index = (index === 0) ? imgs.length - 1 : index - 1;
    updateImage();
});



indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        index = i;
        updateImage();
    });
});

setInterval(()=>{
    index = (index + 1) % imgs.length;
    updateImage();
},9000)