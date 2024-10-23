document.getElementById('cakeEmoji').addEventListener('click', () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  setTimeout(() => {
    window.location.href = 'index1.html';
  }, 3000);
});
