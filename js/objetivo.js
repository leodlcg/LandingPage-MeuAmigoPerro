const etapas = [
    document.getElementById("etapa1"),
    document.getElementById("etapa2"),
    document.getElementById("etapa3"),
    document.getElementById("etapa4"),
    document.getElementById("etapa5"),
    document.getElementById("etapa6"),
];

let painel = "catalogar";

const duracaoPulsar = 3500;
const intervaloMin = 500;
const intervaloMax = 2000;

function intervaloAleatorio() {
    return Math.random() * (intervaloMax - intervaloMin) + intervaloMin;
}

function pulsarAleatorio() {
    const etapa = etapas[Math.floor(Math.random() * etapas.length)];

    etapa.classList.add("pulsar");

    setTimeout(() => {
        etapa.classList.remove("pulsar");
    }, duracaoPulsar);

    setTimeout(pulsarAleatorio, intervaloAleatorio());
}

pulsarAleatorio();

function esconderTodos() {

    document.querySelectorAll(".painel").forEach(painel => {
        painel.style.display = "none";
    });

}

function catalogar() {

    esconderTodos();
    document.getElementById("painel_catalogar").style.display = "block";
    painel = "catalogar";

}

function capturar() {

    esconderTodos();
    document.getElementById("painel_capturar").style.display = "block";
    painel = "capturar";

}

function cuidar() {

    esconderTodos();
    document.getElementById("painel_cuidar").style.display = "block";
    painel = "cuidar";

}

function socializar() {

    esconderTodos();
    document.getElementById("painel_socializar").style.display = "block";
    painel = "socializar";

}

function adotar() {

    esconderTodos();
    document.getElementById("painel_adotar").style.display = "block";
    painel = "adotar";

}

function retornar() {

    esconderTodos();
    document.getElementById("painel_retornar").style.display = "block";
    painel = "retornar";

}

// Painel inicial
catalogar();

function objetivoProximo() {

    switch (painel) {

        case "catalogar":
            capturar();
            break;

        case "capturar":
            cuidar();
            break;

        case "cuidar":
            socializar();
            break;

        case "socializar":
            adotar();
            break;

        case "adotar":
            retornar();
            break;

        case "retornar":
            capturar();
            break;

        default:
            console.log("Painel inválido");
    }

}

function objetivoAnterior() {

    switch (painel) {

        case "catalogar":
            retornar();
            break;

        case "capturar":
            catalogar();
            break;

        case "cuidar":
            capturar();
            break;

        case "socializar":
            cuidar();
            break;

        case "adotar":
            socializar();
            break;

        case "retornar":
            adotar();
            break;

        default:
            console.log("Painel inválido");
    }

}


setInterval(() => {

    objetivoProximo()

}, 10000);