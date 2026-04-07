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

function scrollToSection(sectionId) {
  if (window.location.pathname.includes("profile.html")) {
    const element = document.getElementById(sectionId);
    if (element) {
      window.location.hash = sectionId;
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  } else {
    window.location.href = `profile.html#${sectionId}`;
  }
}