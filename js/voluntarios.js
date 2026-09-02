const voluntarios = [
    {
        prenome: "Leonardo",
        sobrenome: "Domingues",
        cargos: ["NAJ", "NBA", "NCC", "NCRP", "NIO", "NTI"],
        foto: "imgs/voluntarios/fotos/LeonardoDomingues.jpg",
        contatos:[
            {
                instagram: "https://www.instagram.com/leodlcg/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Maria",
        sobrenome: "Eduarda",
        cargos: ["NAJ", "NCC", "NTI"],
        foto: "imgs/voluntarios/fotos/MariaEduarda.jpg",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Daniel",
        sobrenome: "Juan",
        cargos: ["NAJ", "NBA", "NTI", "NIO"],
        foto: "imgs/voluntarios/fotos/DanielJuan.jpg",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Yasmin",
        sobrenome: "Teresa",
        cargos: ["NAJ", "NBA", "NCC", "NCRP"],
        foto: "imgs/voluntarios/fotos/YasminTeresa.jpg",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Lívia",
        sobrenome: "Ribeiro",
        cargos: ["NAJ", "NBA"],
        foto: "imgs/voluntarios/fotos/LiviaRibeiro.jpeg",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Fernando",
        sobrenome: "Ferreira",
        cargos: ["NAJ", "NBA", "NIO"],
        foto: "imgs/voluntarios/fotos/FernandoFerreira.jpg",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Davi",
        sobrenome: "Pinto",
        cargos: ["NAJ", "NBA", "NIO"],
        foto: "imgs/voluntarios/fotos/DaviPinto.jpg",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
];


const coresCard = [

    "#a8e6cf",
    "#FFF176",
    "#f8bbd0",
    "#e452fa",
    "#ffffff",
    "#7e57c2"

]

function inserirNucleos(cargos){

    const nucleos = document.createElement("div");
    nucleos.classList.add("nucleos_voluntarios");

    for(let i = 0; i < cargos.length; i++){

        const link = document.createElement("a");
        link.classList.add("icons_voluntarios");
        link.style.backgroundImage = `url("imgs/nucleos/${cargos[i]}.webp")`;
        nucleos.appendChild(link);

    }

    return nucleos;
}

function inserirRedes(contatos) {

    const redes = document.createElement("div");
    redes.classList.add("redes_voluntarios");

    for (let i = 0; i < contatos.length; i++) {

        const contato = contatos[i];

        if (contato.instagram != "") {
            const link = document.createElement("a");
            link.classList.add("icons_voluntarios");
            link.style.backgroundImage = `url("imgs/voluntarios/IconInstagram.png")`;
            link.href = contato.instagram;
            redes.appendChild(link);
        }

        if (contato.linkdin != "") {
            const link = document.createElement("a");
            link.classList.add("icons_voluntarios");
            link.style.backgroundImage = `url("imgs/voluntarios/IconLinked.png")`;
            link.href = contato.linkdin;
            redes.appendChild(link);
        }

        if (contato.email != "") {
            const link = document.createElement("a");
            link.classList.add("icons_voluntarios");
            link.style.backgroundImage = `url("imgs/voluntarios/IconEmail.png")`;
            link.href = contato.email;
            redes.appendChild(link);
        }

    }

    return redes;
}

function criarCardVoluntario(voluntario, cor) {

    const div = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("h3");

    div.classList.add("card_voluntarios");
    img.classList.add("foto_voluntarios");
    name.classList.add("nome_voluntarios");

    div.style.backgroundColor = cor;
    img.src = voluntario.foto;
    name.innerHTML = voluntario.prenome + "<br>" + voluntario.sobrenome;

    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(inserirNucleos(voluntario.cargos));
    div.appendChild(inserirRedes(voluntario.contatos));

    return div;
}

const ITENS_POR_SLIDE_DESKTOP = 6;
const ITENS_POR_SLIDE_MOBILE = 1;
const BREAKPOINT_MOBILE = 672;

let slideAtual = 0;
let totalSlides = 0;

function itensPorSlide() {

    return window.innerWidth <= BREAKPOINT_MOBILE
        ? ITENS_POR_SLIDE_MOBILE
        : ITENS_POR_SLIDE_DESKTOP;

}

function montarCarrossel() {

    const contentVoluntarios = document.getElementById("content_voluntarios");
    const dotsContainer = document.getElementById("carousel_dots_voluntarios");
    const tamanhoSlide = itensPorSlide();

    contentVoluntarios.innerHTML = "";
    dotsContainer.innerHTML = "";

    let contadorCores = 0;
    let slide = null;

    for (let i = 0; i < voluntarios.length; i++) {

        if (i % tamanhoSlide === 0) {

            slide = document.createElement("div");
            slide.classList.add("slide_voluntarios");
            contentVoluntarios.appendChild(slide);

        }

        const card = criarCardVoluntario(voluntarios[i], coresCard[contadorCores]);
        slide.appendChild(card);

        contadorCores++;

        if (contadorCores == coresCard.length) {

            contadorCores = 0;

        }

    }

    totalSlides = contentVoluntarios.children.length;

    for (let i = 0; i < totalSlides; i++) {

        const dot = document.createElement("button");
        dot.type = "button";
        dot.classList.add("dot_voluntarios");
        dot.setAttribute("aria-label", "Ir para o grupo " + (i + 1) + " de voluntários");
        dot.addEventListener("click", () => irParaSlide(i));
        dotsContainer.appendChild(dot);

    }

    slideAtual = Math.min(slideAtual, totalSlides - 1);
    if (slideAtual < 0) slideAtual = 0;

    atualizarCarrossel();

}

function atualizarCarrossel() {

    const contentVoluntarios = document.getElementById("content_voluntarios");
    const setaEsquerda = document.getElementById("seta_voluntarios_esquerda");
    const setaDireita = document.getElementById("seta_voluntarios_direita");
    const dots = document.querySelectorAll(".dot_voluntarios");

    contentVoluntarios.style.transform = `translateX(-${slideAtual * 100}%)`;

    dots.forEach((dot, indice) => {

        dot.classList.toggle("ativo", indice === slideAtual);

    });

    setaEsquerda.disabled = slideAtual === 0;
    setaDireita.disabled = slideAtual === totalSlides - 1;

}

function irParaSlide(indice) {

    slideAtual = Math.max(0, Math.min(indice, totalSlides - 1));
    atualizarCarrossel();

}

document.getElementById("seta_voluntarios_esquerda").addEventListener("click", () => {

    irParaSlide(slideAtual - 1);

});

document.getElementById("seta_voluntarios_direita").addEventListener("click", () => {

    irParaSlide(slideAtual + 1);

});

let toqueInicialX = null;

const viewportVoluntarios = document.querySelector(".carousel_viewport_voluntarios");

viewportVoluntarios.addEventListener("touchstart", (evento) => {

    toqueInicialX = evento.touches[0].clientX;

});

viewportVoluntarios.addEventListener("touchend", (evento) => {

    if (toqueInicialX === null) return;

    const diferenca = evento.changedTouches[0].clientX - toqueInicialX;

    if (diferenca > 50) {

        irParaSlide(slideAtual - 1);

    } else if (diferenca < -50) {

        irParaSlide(slideAtual + 1);

    }

    toqueInicialX = null;

});

let resizeTimeout = null;
let tamanhoSlideAnterior = itensPorSlide();

window.addEventListener("resize", () => {

    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => {

        const novoTamanho = itensPorSlide();

        if (novoTamanho !== tamanhoSlideAnterior) {

            tamanhoSlideAnterior = novoTamanho;
            montarCarrossel();

        }

    }, 200);

});

montarCarrossel();


