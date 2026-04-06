function switchTab(cardId, element) {
  const allCards = document.querySelectorAll('.info-card');
  allCards.forEach(card => {
    card.style.display = 'none';
  });

  const selectedCard = document.getElementById(cardId);
  if (selectedCard) {
    selectedCard.style.display = 'block';
  }

  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach(tab => {
    tab.classList.remove('active');
  });
  element.classList.add('active');
}