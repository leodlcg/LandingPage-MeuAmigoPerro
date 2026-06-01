let currentSlide = 0;

let carouselTimer;

function initializeEventos(){

    startCarousel();

    initializeGallery();

}

function startCarousel(){

    carouselTimer =
        setInterval(
            nextSlide,
            5000
        );

}

function resetCarouselTimer(){

    clearInterval(
        carouselTimer
    );

    startCarousel();

}

function nextSlide(){

    const cards =
        document.querySelectorAll(
            ".eventos__card"
        );

    currentSlide++;

    if(currentSlide >= cards.length){

        currentSlide = 0;

    }

    updateCarousel();

}

function previousSlide(){

    const cards =
        document.querySelectorAll(
            ".eventos__card"
        );

    currentSlide--;

    if(currentSlide < 0){

        currentSlide =
            cards.length - 1;

    }

    updateCarousel();

}

function updateCarousel(){

    const track =
        document.querySelector(
            ".eventos__track"
        );

    track.style.transform =
        `translateX(-${currentSlide * 100}%)`;

}

function initializeGallery(){

    const galleryButtons =
        document.querySelectorAll(
            ".eventos__gallery-button"
        );

    galleryButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelector(
                        ".eventos__gallery"
                    )
                    .style.display =
                    "grid";

            }
        );

    });

}

const galleryImages =
    document.querySelectorAll(
        ".eventos__gallery img"
    );

galleryImages.forEach(image => {

    image.addEventListener(
        "click",
        () => {

            const lightbox =
                document.querySelector(
                    ".eventos__lightbox"
                );

            lightbox.style.display =
                "flex";

            lightbox.innerHTML =
                `
                <img src="${image.src}">
                `;

        }
    );

});

document.addEventListener(
    "click",
    event => {

        const lightbox =
            document.querySelector(
                ".eventos__lightbox"
            );

        if(
            event.target === lightbox
        ){

            lightbox.style.display =
                "none";

        }

    }
);