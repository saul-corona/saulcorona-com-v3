const initScroll = () => {
  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll("section[id]");

  function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");
      const navLink = document.querySelector(
        '.nav__menu a[href*="' + sectionId + '"]'
      );

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add("active-link");
        } else {
          navLink.classList.remove("active-link");
        }
      }
    });

    const contactLink = document.querySelector('.nav__menu a[href*="contact"]');
    if (
      contactLink &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 10
    ) {
      document.querySelectorAll(".nav__menu a.active-link").forEach(link => {
        link.classList.remove("active-link");
      });
      contactLink.classList.add("active-link");
    }
  }

  if (sections.length > 0) {
    window.addEventListener("scroll", scrollActive);
    scrollActive();
  }

  /*==================== CHANGE BACKGROUND HEADER ====================*/
  function scrollHeader() {
    const nav = document.getElementById("header");
    if (nav) {
      if (window.scrollY >= 80) nav.classList.add("scroll-header");
      else nav.classList.remove("scroll-header");
    }
  }
  window.addEventListener("scroll", scrollHeader);
  scrollHeader();

  /*==================== SHOW SCROLL UP ====================*/
  const scrollUpElement = document.getElementById("scroll-up");

  if (!scrollUpElement) {
    console.warn('Scroll Up element with ID "scroll-up" not found.');
  }

  function scrollUp() {
    const currentScrollY = window.scrollY;

    if (scrollUpElement) {
      if (currentScrollY >= 600) {
        scrollUpElement.classList.add("show-scroll");
      } else {
        scrollUpElement.classList.remove("show-scroll");
      }
    }
  }

  if (scrollUpElement) {
    window.addEventListener("scroll", scrollUp);
    scrollUp();
  }
};

export default initScroll;
