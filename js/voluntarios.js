const voluntarios = [
    {
        nome: "Ana Paula Ferreira",
        cargos: ["Coordenadora Geral", "Responsável de Comunicação"],
        foto: "https://ui-avatars.com/api/?name=Ana+Paula+Ferreira&background=4f46e5&color=fff&size=200"
    },
    {
        nome: "Carlos Eduardo Lima",
        cargos: ["Tesoureiro", "Apoio Logístico"],
        foto: "https://ui-avatars.com/api/?name=Carlos+Eduardo+Lima&background=0891b2&color=fff&size=200"
    },
    {
        nome: "Mariana Souza",
        cargos: ["Voluntária Social", "Educação Infantil"],
        foto: "https://ui-avatars.com/api/?name=Mariana+Souza&background=059669&color=fff&size=200"
    },
    {
        nome: "Rafael Oliveira",
        cargos: ["Suporte Técnico", "Gestão de Redes Sociais"],
        foto: "https://ui-avatars.com/api/?name=Rafael+Oliveira&background=dc2626&color=fff&size=200"
    },
    {
        nome: "Juliana Costa",
        cargos: ["Assistente Administrativa"],
        foto: "https://ui-avatars.com/api/?name=Juliana+Costa&background=d97706&color=fff&size=200"
    },
    {
        nome: "Juliana Costa",
        cargos: ["Assistente Administrativa"],
        foto: "https://ui-avatars.com/api/?name=Juliana+Costa&background=d97706&color=fff&size=200"
    },
    {
        nome: "Juliana Costa",
        cargos: ["Assistente Administrativa"],
        foto: "https://ui-avatars.com/api/?name=Juliana+Costa&background=d97706&color=fff&size=200"
    }
];


const coresCard = [

    "#a8e6cf",
    "#FFF176",
    "#f8bbd0",
    "#e452fa",
    "#ffffff",
    "#7e57c2"

]

async function inserirHTML() {

    const contentVoluntarios = document.getElementsByClassName("content_voluntarios")[0];

    let contadorCores = 0;

    for (let i = 0; i < voluntarios.length; i++) {

        const div = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h3");

        div.classList.add("card_voluntarios");
        name.classList.add("nome_voluntarios");
        img.classList.add("foto_voluntarios");

        div.style.backgroundColor = coresCard[contadorCores];
        name.innerText = voluntarios[i].nome;
        img.src = `imgs/animais/2.webp`;

        contentVoluntarios.appendChild(div);
        div.appendChild(img);
        div.appendChild(name);

        contadorCores++;

        if(contadorCores == coresCard.length){

            contadorCores = 0;

        }


    }
}

inserirHTML()


