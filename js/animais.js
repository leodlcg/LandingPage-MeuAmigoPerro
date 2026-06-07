const quantidadeTotalImagens = 9;

function randomNumber() {
    const numbers = [];

    for (let i = 0; i < quantidadeTotalImagens; i++) {
        numbers.push(i);
    }

    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    return numbers;
}

async function inserirHTML() {

    const numbers = randomNumber();
    const track = document.querySelector(".animais_track");

    for (let i = 0; i < quantidadeTotalImagens; i++) {
        const img = document.createElement("img");
        img.src = `imgs/animais/${numbers[i]}.webp`;
        img.classList.add("animais_image");
        track.appendChild(img);
    }
}

async function initializeAnimais() {
    await inserirHTML();

    const track = document.querySelector(".animais_track");
    track.innerHTML += track.innerHTML;
}

initializeAnimais();