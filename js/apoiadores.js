

// const apoiadores = [
//     {
//         prenome: "Ana",
//         sobrenome: "Paula",
//         valor: 100
//     },
//     {
//         prenome: "Ana",
//         sobrenome: "Paula",
//         valor: 100
//     },
//     {
//         prenome: "Ana",
//         sobrenome: "Paula",
//         valor: 100
//     },
//     {
//         prenome: "Ana",
//         sobrenome: "Paula",
//         valor: 100
//     },
//     {
//         prenome: "Ana",
//         sobrenome: "Paula",
//         valor: 100
//     },
//     {
//         prenome: "Ana",
//         sobrenome: "Paula",
//         valor: 100
//     },
//     {
//         prenome: "Ana",
//         sobrenome: "Paula",
//         valor: 100
//     },
// ];


function initializeApoiadores(){

    const names =
        document.querySelectorAll(
            ".apoiadores__name"
        );

    setInterval(() => {

        names.forEach(name => {

            name.classList.remove(
                "apoiadores__name--animate"
            );

        });

        const randomIndex =
            Math.floor(
                Math.random() *
                names.length
            );

        names[randomIndex]
            .classList.add(
                "apoiadores__name--animate"
            );

    },3000);

}

const mesAtual = new Date().toLocaleString('pt-BR', {
    month: 'long'
});

document.getElementById("text_mes_apoiadores_horizontal").innerText = `Top doadores ${mesAtual}`;
document.getElementById("text_mes_apoiadores_vertical").innerText = `Top doadores ${mesAtual}`;