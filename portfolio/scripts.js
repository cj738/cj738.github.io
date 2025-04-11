
  const sections = document.querySelectorAll("section, header, footer");
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      navLinks.forEach(l => l.classList.remove('active')); // remove from all
      this.classList.add('active'); // add to clicked
    });
  });

