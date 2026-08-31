const empresas = [
{
    nome: "Teste",
    logo: "imgs/empresas/SuaMarcaAqui.png",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/AnuncieAqui.webp",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/SuaMarcaAqui02.png",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/SuaLogoAqui.png",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/ufc.png",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/SuaMarcaAqui03.png",
    link: "https://www.instagram.com/meuamigoperro/"
},
]

async function inserirHTML() {
    const track = document.querySelector(".empresas_track");

    for (let i = 0; i < empresas.length; i++) {
        const link = document.createElement("a");
        const img = document.createElement("img");

        img.classList.add("empresas_img");  // ✅ classe na <img>
        img.src = empresas[i].logo;
        img.alt = empresas[i].nome;

        link.classList.add("empresas_link");
        link.target = "_blank";
        link.href = empresas[i].link;

        link.appendChild(img);
        track.appendChild(link);
    }
}

async function initializeEmpresas() {
    await inserirHTML();

    const track = document.querySelector(".empresas_track");
    track.innerHTML += track.innerHTML; // duplica para o loop infinito
}

initializeEmpresas();


