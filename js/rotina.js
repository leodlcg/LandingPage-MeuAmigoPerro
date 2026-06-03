function verificarImagem(src) {
    return new Promise((resolve) => {
        const img = new Image();

        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);

        img.src = src;
    })
}

async function contarImagens() {
    let contador = 1;

    while (true) {
        const existe = await verificarImagem(
            `../imgs/rotina/fotos/${contador}.jpeg`
        );

        if (!existe) {
            break;
        }

        contador++;
    }

    return contador - 1;
}

async function randomNumber(totalImagens){

    const numbers = [];

    for(let i = 1; i <= totalImagens; i++){
        numbers.push(i);
    }

    for(let i = numbers.length - 1; i > 0; i--){

        const j = Math.floor(
            Math.random() * (i + 1)
        );

        [numbers[i], numbers[j]] =
        [numbers[j], numbers[i]];
    }

    return numbers;
}

async function inserirHTML() {

    const totalImagens = await contarImagens();

    const numbers  = await randomNumber(totalImagens);

    const track = document.querySelector(".animais__track");



    for (let i = 1; i <= totalImagens; i++) {

        const img = document.createElement("img");

        img.src = `imgs/animais/${numbers[i - 1]}.webp`;
        console.log(numbers[i - 1])
        img.classList.add("animais__image");

        track.appendChild(img);

    }
}

async function initializeAnimais() {

    await inserirHTML();

    const track = document.querySelector(".animais__track");

    track.innerHTML += track.innerHTML;

}

const fotos = [
    {
        img: "imgs/rotina/fotos/1.jpeg",
        texto: "Simpósio - 2026"
    },
    {
        img: "imgs/rotina/fotos/2.jpeg",
        texto: "Feira de Ciências"
    },
    {
        img: "imgs/rotina/fotos/3.jpeg",
        texto: "Workshop"
    },
    {
        img: "imgs/rotina/fotos/1.jpeg",
        texto: "Palestra"
    },
    {
        img: "imgs/rotina/fotos/2.jpeg",
        texto: "Evento Cultural"
    }
];

let indiceCentro = 0;

function atualizarCarousel() {

    const esquerda =
        (indiceCentro - 1 + fotos.length) % fotos.length;

    const direita =
        (indiceCentro + 1) % fotos.length;

    document.getElementById("img-esquerda").src =
        fotos[esquerda].img;

    document.getElementById("texto-esquerda").innerText =
        fotos[esquerda].texto;

    document.getElementById("img-centro").src =
        fotos[indiceCentro].img;

    document.getElementById("texto-centro").innerText =
        fotos[indiceCentro].texto;

    document.getElementById("img-direita").src =
        fotos[direita].img;

    document.getElementById("texto-direita").innerText =
        fotos[direita].texto;
}

let animando = false;

function proximo() {

    if (animando) return;

    animando = true;

    document.querySelectorAll(".carousel_imgs")
        .forEach(img => img.classList.add("fade"));

    setTimeout(() => {

        indiceCentro =
            (indiceCentro + 1) % fotos.length;

        atualizarCarousel();

        document.querySelectorAll(".carousel_imgs")
            .forEach(img => img.classList.remove("fade"));

        animando = false;

    }, 400);
}

function anterior() {

    if (animando) return;

    animando = true;

    document.querySelectorAll(".carousel_imgs")
        .forEach(img => img.classList.add("fade"));

    setTimeout(() => {

        indiceCentro =
            (indiceCentro - 1 + fotos.length) % fotos.length;

        atualizarCarousel();

        document.querySelectorAll(".carousel_imgs")
            .forEach(img => img.classList.remove("fade"));

        animando = false;

    }, 400);
}

atualizarCarousel();

let intervalo = setInterval(proximo, 10000);

const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter", () => {
    clearInterval(intervalo);
});

carousel.addEventListener("mouseleave", () => {
    intervalo = setInterval(proximo, 10000);
});