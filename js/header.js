const btn = document.getElementById('hamburgerBtn');
const drawer = document.getElementById('drawer');

function openDrawer() {

    drawer.classList.add('is-open');
    document.getElementById("hamburgerBtn").classList.add('is-open');
    document.getElementById("hamburgerBtn").setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');

}

function closeDrawer() {
    drawer.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
}

document.getElementById("hamburgerBtn").addEventListener('click', () => {
    drawer.classList.contains('is-open') ? closeDrawer() : openDrawer();
});

// Fecha ao clicar em qualquer link do drawer
document.addEventListener('click', (e) => {
    if (open && !drawer.contains(e.target) && e.target.id !== 'hamburgerBtn') {
        closeDrawer(e);
    }
});

drawer.addEventListener('click', (e) => {
    if (e.target.closest('.header_link')) {
        closeDrawer(e);
    }
});