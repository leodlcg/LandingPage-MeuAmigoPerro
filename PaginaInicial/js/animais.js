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
            `imgs/animais/${contador}.webp`
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


