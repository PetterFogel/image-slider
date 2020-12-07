window.addEventListener("load", main);

function main() {
    startProgramWithSetinterval();
}

function startProgramWithSetinterval() {
    setInterval(fetchImagesFromHTML, 4000);
}

function fetchImagesFromHTML() {
    const images = document.querySelectorAll(".slider-container > img");
    changeActiveImage(images);
}

function changeActiveImage(images) {
    for (let i = 0; i < images.length; i++) {

        if (images[i].classList.contains("active")) {
            images[i].classList.remove("active");
            let nextIndex = i + 1;

            if (nextIndex >= images.length) {
                nextIndex = 0;
            }

            images[nextIndex].classList.add("active");
            break;
        }
    }
}