document.querySelectorAll('.cards > div').forEach(card => {
  const header = card.querySelector('[class$="_card_header"]')
  const icon = header.querySelector('img')
  
  icon.style.transform = 'rotate(180deg)';

  header.addEventListener('click', () => {
    card.classList.toggle('active')
    if (card.classList.contains('active')) {
      icon.style.transform = 'rotate(0deg)';
    } else {
      icon.style.transform = 'rotate(180deg)';
    }
  })
})