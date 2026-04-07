function toggleNav() {
    const bar = document.getElementById('navbar');
    if (bar) bar.classList.toggle('active');
}

$(document).ready(function() {
    $(document).on('click', function(e) {
        const bar = $('#navbar');
        if (!bar.is(e.target) && bar.has(e.target).length === 0) {
            bar.removeClass('active');
        }
    });
});