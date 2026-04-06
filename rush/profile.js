function switchTab(id, el) {
  const panes = document.querySelectorAll('.pane');
  panes.forEach(p => p.style.display = 'none');

  const target = document.getElementById(id);
  if (target) target.style.display = 'block';

  const all = document.querySelectorAll('.tab');
  all.forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}