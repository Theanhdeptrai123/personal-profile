document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector(".nav-list");

  burger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  const revealElements = document.querySelectorAll(".reveal");
  const revealChildren = document.querySelectorAll(".reveal-child");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 100) {
        el.classList.add("active");
      }
    });

    revealChildren.forEach((child) => {
      const childTop = child.getBoundingClientRect().top;
      if (childTop < windowHeight - 100) {
        child.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  const shape1 = document.querySelector(".shape1");
  const shape2 = document.querySelector(".shape2");
  const shape3 = document.querySelector(".shape3");

  let angle = 0;

  const animateShapes = () => {
    angle += 0.5;
    const rad = angle * (Math.PI / 180);
    shape1.style.transform = `translate(${Math.sin(rad) * 10}px, ${Math.cos(rad) * 10}px)`;
    shape2.style.transform = `translate(${Math.cos(rad) * 15}px, ${Math.sin(rad) * 15}px)`;
    shape3.style.transform = `translate(${Math.sin(rad * 0.5) * 20}px, ${Math.cos(rad * 0.5) * 20}px)`;
    requestAnimationFrame(animateShapes);
  };

  animateShapes();
});
