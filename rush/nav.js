function toggleNav() {
    const bar = document.getElementById('navbar');
    bar.classList.toggle('active');
}

document.addEventListener('click', function(e) {
    const bar = document.getElementById('navbar');
    const inside = bar.contains(e.target);

    if (!inside && bar.classList.contains('active')) {
        bar.classList.remove('active');
    }
});