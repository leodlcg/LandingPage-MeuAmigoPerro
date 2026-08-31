document.addEventListener('DOMContentLoaded', function () {

    const cards = document.querySelectorAll('.nucleos_card');
    const descricao = document.querySelector('.descricao_card_nucleos');
    const descricaoTitulo = document.querySelector('.descricao_card_nucleos_titulo');
    const descricaoTexto = document.querySelector('.descricao_card_nucleos_texto');

    if (!cards.length || !descricao) return;

    let cardAtivo = null;

    cards.forEach(function (card) {

        card.addEventListener('click', function (event) {

            event.preventDefault();

            // Se clicar no mesmo card que já está aberto, fecha a descrição
            if (cardAtivo === card) {

                descricao.classList.remove('ativo');
                cards.forEach(c => c.classList.remove('nucleos_card_ativo'));
                cardAtivo = null;
                return;

            }

            // Atualiza o conteúdo da descrição com os dados do card clicado
            descricaoTitulo.textContent = card.dataset.nome || '';
            descricaoTexto.textContent = card.dataset.desc || '';

            // Marca visualmente o card ativo
            cards.forEach(c => c.classList.remove('nucleos_card_ativo'));
            card.classList.add('nucleos_card_ativo');

            // Mostra a div de descrição
            descricao.classList.add('ativo');

            cardAtivo = card;

        });

    });

});