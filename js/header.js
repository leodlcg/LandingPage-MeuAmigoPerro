const btn = document.getElementById('hamburgerBtn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('drawerOverlay');

let closingViaPopstate = false; // evita loop entre closeDrawer() e popstate

function openDrawer() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Cria uma entrada "fantasma" no histórico pra capturar o botão voltar
    history.pushState({ drawerOpen: true }, '');
}

function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    // Se o fechamento NÃO veio do botão voltar, consome a entrada fantasma
    if (!closingViaPopstate && history.state && history.state.drawerOpen) {
        history.back();
    }
    closingViaPopstate = false;
}

btn.addEventListener('click', () => {
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
});

overlay.addEventListener('click', closeDrawer);

drawer.querySelectorAll('.header_link').forEach(link => {
    link.addEventListener('click', closeDrawer);
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
});

// Fecha o drawer quando o usuário aperta a seta de voltar do celular
window.addEventListener('popstate', () => {
    if (drawer.classList.contains('is-open')) {
        closingViaPopstate = true;
        closeDrawer();
    }
});