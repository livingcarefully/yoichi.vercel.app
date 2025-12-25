document.addEventListener('mousemove', (e) => {
  const parallaxElement = document.querySelector('.parallax');
  if(parallaxElement){
    const x = (window.innerWidth/2 - e.clientX) / 40;
    const y = (window.innerHeight/2 - e.clientY) / 40;
    parallaxElement.style.transform = `translate(${x}px, ${y}px)`;
  }
});
