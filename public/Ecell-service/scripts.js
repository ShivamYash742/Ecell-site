// Using GSAP for smooth animations
document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".service-card", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".services-container",
        start: "top 80%",
      },
    });
  });
  
  // Button click interaction
  document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', () => {
      alert('Detailed information will be added soon!');
    });
  });
  