function toggleNav() {
    const bar = document.getElementById('navbar');
    if (bar) {
        bar.classList.toggle('active');
    }
}

$(document).ready(function() {
    $('.profile-trigger').on('click', function() {
        const card = $(this).siblings('.about-card');
        $('.about-card').not(card).slideUp(400);
        card.stop().slideToggle(500);
    });

    $(document).on('click', function(e) {
        const bar = $('#navbar');
        if (!bar.is(e.target) && bar.has(e.target).length === 0) {
            bar.removeClass('active');
        }
    });
});