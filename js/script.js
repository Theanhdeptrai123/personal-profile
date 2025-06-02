const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        const children = entry.target.querySelectorAll('.reveal-child');
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 150}ms`;
          child.classList.add('active');
        });
        observer.unobserve(entry.target);
      }
    });
  }, 
  { threshold: 0.15 }
);

reveals.forEach(section => {
  revealObserver.observe(section);
});

const shapes = document.querySelectorAll('.shape');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  shapes.forEach((shape, i) => {
    const speed = (i + 1) * 0.25;
    shape.style.transform = `translateY(${scrollY * speed}px)`;
  });

  highlightNavOnScroll();
});

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

function highlightNavOnScroll() {
  const scrollPos = window.scrollY + window.innerHeight / 3;

  document.querySelectorAll('section').forEach(section => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;

    const navLink = document.querySelector(`nav ul li a[href="#${section.id}"]`);
    if (!navLink) return;

    if (scrollPos >= top && scrollPos < bottom) {
      navLink.classList.add('active-nav');
    } else {
      navLink.classList.remove('active-nav');
    }
  });
}
