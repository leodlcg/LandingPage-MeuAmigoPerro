const voluntarios = [
    {
        prenome: "Ana",
        sobrenome: "Paula",
        cargos: ["NAJ", "NBA", "NCC", "NCRP", "NIO", "NTI"],
        foto: "https://ui-avatars.com/api/?name=Ana+Paula+Ferreira&background=4f46e5&color=fff&size=200",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Carlos",
        sobrenome: "Eduardo",
        cargos: ["NBA", "NTI"],
        foto: "https://ui-avatars.com/api/?name=Carlos+Eduardo+Lima&background=0891b2&color=fff&size=200",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Mariana",
        sobrenome: "Souza",
        cargos: ["NCC"],
        foto: "https://ui-avatars.com/api/?name=Mariana+Souza&background=059669&color=fff&size=200",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Rafael",
        sobrenome: "Oliveira",
        cargos: ["NAJ", "NIO"],
        foto: "https://ui-avatars.com/api/?name=Rafael+Oliveira&background=dc2626&color=fff&size=200",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Leonardo",
        sobrenome: "Domingues",
        cargos: ["NAJ", "NTI", "NBA"],
        foto: "https://ui-avatars.com/api/?name=Juliana+Costa&background=d97706&color=fff&size=200",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Gislene",
        sobrenome: "Correia",
        cargos: ["NAJ", "NBA", "NCC", "NCRP", "NIO"],
        foto: "https://ui-avatars.com/api/?name=Juliana+Costa&background=d97706&color=fff&size=200",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
    },
    {
        prenome: "Juliana",
        sobrenome: "Costa",
        cargos: ["NCC"],
        foto: "https://ui-avatars.com/api/?name=Juliana+Costa&background=d97706&color=fff&size=200",
        contatos:[
            {
                instagram: "https://www.instagram.com/meuamigoperro/",
                linkdin: "https://www.instagram.com/meuamigoperro/",
                email: "https://www.instagram.com/meuamigoperro/"

            }  
        ]
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

function inserirHTML() {

    const contentVoluntarios = document.getElementById("content_voluntarios");

    let contadorCores = 0;

    for (let i = 0; i < voluntarios.length; i++) {

        const div = document.createElement("div");
        const img = document.createElement("img");
        const name = document.createElement("h3");

        div.classList.add("card_voluntarios");
        img.classList.add("foto_voluntarios");
        name.classList.add("nome_voluntarios");

        div.style.backgroundColor = coresCard[contadorCores];
        img.src = voluntarios[i].foto;
        name.innerHTML = voluntarios[i].prenome + "<br>" + voluntarios[i].sobrenome;

        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(inserirNucleos(voluntarios[i].cargos));
        div.appendChild(inserirRedes(voluntarios[i].contatos));

        contentVoluntarios.appendChild(div);

        contadorCores++;

        if(contadorCores == coresCard.length){

            contadorCores = 0;

        }


    }
}

inserirHTML()


