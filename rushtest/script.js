function toggleNav() {
    document.getElementById('navbar').classList.toggle('active');
}

function showPage(pageId, tabId = null) {
    document.querySelectorAll('.main-page').forEach(p => p.style.display = 'none');
    const targetPage = document.getElementById(pageId);
    targetPage.style.display = 'block';
    
    if (tabId) {
        const targetTab = document.querySelector(`#${pageId} .tab[onclick*="${tabId}"]`);
        switchTab(tabId, targetTab);
    }
    
    document.getElementById('navbar').classList.remove('active');
}

function switchTab(id, el) {
    const page = el.closest('.main-page');
    page.querySelectorAll('.pane').forEach(p => p.style.display = 'none');
    page.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    
    document.getElementById(id).style.display = 'block';
    el.classList.add('active');
}

$(document).on('click', function(e) {
    const bar = $('#navbar');
    if (!bar.is(e.target) && bar.has(e.target).length === 0) bar.removeClass('active');
});