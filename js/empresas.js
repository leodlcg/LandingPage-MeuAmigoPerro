const empresas = [
{
    nome: "Teste",
    logo: "imgs/empresas/Magalu.png",
    plano: "bronze",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/Google.png",
    plano: "prata",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/Spotify.png",
    plano: "bronze",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/Vale.png",
    plano: "bronze",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/Fedex.png",
    plano: "ouro",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/Xbox.png",
    plano: "prata",
    link: "https://www.instagram.com/meuamigoperro/"
},
{
    nome: "Teste",
    logo: "imgs/empresas/ufc.png",
    plano: "ouro",
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


