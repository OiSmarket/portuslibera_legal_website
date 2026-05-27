function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('open');
}

function showTab(id, e) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + id).classList.add('active');
    if (e && e.target) e.target.classList.add('active');
}

function submitForm(e) {
    e.preventDefault();
    const btn = document.getElementById('submitBtn');
    btn.textContent = '✓ Заявка отправлена!';
    btn.classList.add('success');
    setTimeout(() => {
        btn.textContent = 'Отправить заявку →';
        btn.classList.remove('success');
    }, 3000);
}

document.addEventListener('click', function(e) {
    const menu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger');
    if (menu && !menu.contains(e.target) && burger && !burger.contains(e.target)) {
        menu.classList.remove('open');
    }
});