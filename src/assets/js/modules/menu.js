const initMenu = () => {
  /*==================== MENU SHOW Y HIDDEN ====================*/
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }

  if (navClose && navMenu) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }

  /*==================== REMOVE MENU MOBILE ====================*/
  const navLinks = document.querySelectorAll(".nav__link");

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) {
      navMenu.classList.remove("show-menu");
    }
  }

  if (navLinks.length > 0) {
    navLinks.forEach(n => n.addEventListener("click", linkAction));
  }
};

export default initMenu;
