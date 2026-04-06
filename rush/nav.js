function toggleNav() {
    const navWrapper = document.getElementById('nav-wrapper');
    navWrapper.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const navWrapper = document.getElementById('nav-wrapper');
    const isClickInside = navWrapper.contains(event.target);

    if (!isClickInside && navWrapper.classList.contains('active')) {
        navWrapper.classList.remove('active');
    }
});