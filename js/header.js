const btn = document.getElementById('hamburgerBtn');
const drawer = document.getElementById('drawer');
const overlay = document.getElementById('drawerOverlay');

function openDrawer() {
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    btn.classList.add('is-open');
    btn.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

btn.addEventListener('click', () => {
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
});

overlay.addEventListener('click', closeDrawer);

// Fecha ao clicar em qualquer link do drawer
drawer.querySelectorAll('.header_link').forEach(link => {
    link.addEventListener('click', closeDrawer);
});

// Fecha com tecla Escape
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDrawer();
});