  // Select all card headers
  const cardHeaders = document.querySelectorAll('.html_card_header, .css_card_header, .js_card_header');

  cardHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const cardBody = header.nextElementSibling; // the body below the header
      const icon = header.querySelector('img');

      // Toggle active class
      cardBody.classList.toggle('active');

      // Rotate dropdown arrow
      if (cardBody.classList.contains('active')) {
        icon.style.transform = 'rotate(180deg)';
      } else {
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });
