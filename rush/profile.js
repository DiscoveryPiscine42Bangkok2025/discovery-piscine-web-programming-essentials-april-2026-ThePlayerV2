function switchTab(id, el) {
  const panes = document.querySelectorAll('.pane');
  panes.forEach(p => {
    p.style.display = 'none';
    p.classList.remove('pane-active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
    target.classList.add('pane-active');
  }

  const all = document.querySelectorAll('.tab');
  all.forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
}

window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const tabId = urlParams.get('tab');
  if (tabId) {
    const allTabs = document.querySelectorAll('.tab');
    let targetEl = null;
    allTabs.forEach(t => {
      if (t.getAttribute('onclick').includes(tabId)) targetEl = t;
    });
    if (targetEl) switchTab(tabId, targetEl);
  }
};