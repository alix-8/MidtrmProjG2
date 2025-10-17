const members = document.querySelectorAll('.member');

members.forEach(member => {
  const originalText = member.textContent;
  const email = member.dataset.email;

  member.addEventListener('mouseenter', () => {
    member.textContent = email;
  });

  member.addEventListener('mouseleave', () => {
    member.textContent = originalText;
  });
});
