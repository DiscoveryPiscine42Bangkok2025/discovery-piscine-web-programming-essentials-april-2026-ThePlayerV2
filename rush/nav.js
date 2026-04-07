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

function navToTab(tabId) {
  if (window.location.pathname.includes("profile.html")) {
    const allTabs = document.querySelectorAll('.tab');
    let targetEl = null;
    allTabs.forEach(t => {
      if (t.getAttribute('onclick').includes(tabId)) targetEl = t;
    });
    if (targetEl) switchTab(tabId, targetEl);
  } else {
    window.location.href = `profile.html?tab=${tabId}`;
  }
}