function switchTab(id, el) {
  const panes = document.querySelectorAll('.pane');
  panes.forEach(p => {
    p.style.display = 'none';
    p.classList.remove('pane-active');
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.add('pane-active');
  }

  const all = document.querySelectorAll('.tab');
  all.forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}