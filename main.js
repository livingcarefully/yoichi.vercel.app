document.addEventListener('mousemove', (e) => {
  const body = document.body;

  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  body.style.backgroundPosition = `calc(50% + ${x}px) calc(50% + ${y}px)`;
});
