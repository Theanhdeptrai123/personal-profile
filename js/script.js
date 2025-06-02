// Scroll Reveal effect using Intersection Observer

const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // reveal only once
      }
    });
  }, 
  { threshold: 0.1 }
);

reveals.forEach(section => {
  revealObserver.observe(section);
});


// Parallax effect for background shapes on scroll

const shapes = document.querySelectorAll('.shape');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  shapes.forEach((shape, i) => {
    const speed = (i + 1) * 0.3; // different speed for each shape
    shape.style.transform = `translateY(${scrollY * speed}px)`;
  });
});
