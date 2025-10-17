const cardHeaders = document.querySelectorAll('.ides_card_header, .design_card_header, .icons_card_header');

cardHeaders.forEach(header => {
  const cardBody = header.nextElementSibling;
  const icon = header.querySelector('img');
  icon.style.transform = 'rotate(180deg)';
  
  header.addEventListener('click', () => {
    cardBody.classList.toggle('active');

    // Rotate dropdown arrow
    if (cardBody.classList.contains('active')) {
      icon.style.transform = 'rotate(0deg)';
    } else {
      icon.style.transform = 'rotate(180deg)';
    }
  });
});
