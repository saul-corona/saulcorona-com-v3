/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach(n => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content");
const skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }

  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach(el => {
  el.addEventListener("click", toggleSkills);
});
/*==================== QUALIFICATION TABS ====================*/

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach(tabContent => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach(t => {
      t.classList.remove("qualification__active");
    });

    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach(modalClose => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach(modalView => {
      modalView.classList.remove("active-modal");
    });
  });
});

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

  // Special case for contact section at bottom of page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    const contactLink = document.querySelector('.nav__menu a[href*="contact"]');
    if (contactLink) {
      // Remove active class from all links first
      document.querySelectorAll(".nav__menu a").forEach(link => {
        link.classList.remove("active-link");
      });
      // Add active class to contact link
      contactLink.classList.add("active-link");
    }
  }
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 600) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// Add this code for blog tag filtering
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(
    ".blog-filters .filter-button"
  );
  const postItems = document.querySelectorAll(
    "#blog-posts-list .blog-post-item"
  );
  const postsList = document.getElementById("blog-posts-list"); // Get the container

  if (!postsList || filterButtons.length === 0 || postItems.length === 0) {
    // Don't run if elements aren't found (e.g., not on the blog page)
    return;
  }

  // Function to filter posts
  const filterPosts = tag => {
    let hasVisibleItems = false;
    postItems.forEach(item => {
      const itemTags = item.dataset.tags ? item.dataset.tags.split(",") : [];
      if (tag === "all" || itemTags.includes(tag)) {
        item.style.display = ""; // Show item (reset to default display)
        hasVisibleItems = true;
      } else {
        item.style.display = "none"; // Hide item
      }
    });

    // (Optional) Visually indicate no results
    // Example: Add/remove a message
    let noResultsMessage = postsList.parentNode.querySelector(
      ".no-results-message"
    );
    if (!hasVisibleItems) {
      if (!noResultsMessage) {
        postsList.insertAdjacentHTML(
          "afterend",
          '<p class="no-results-message section__subtitle">No posts found for this tag.</p>'
        );
      }
    } else {
      if (noResultsMessage) {
        noResultsMessage.remove();
      }
    }
  };

  // Add event listeners to buttons
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedTag = button.dataset.tag;

      // Update active button style
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Remove existing no results message before filtering
      let noResultsMessage = postsList.parentNode.querySelector(
        ".no-results-message"
      );
      if (noResultsMessage) {
        noResultsMessage.remove();
      }

      // Filter the posts
      filterPosts(selectedTag);
    });
  });

  // Initially, show all posts (optional, could rely on default state)
  // filterPosts('all'); // Usually not necessary on initial load
});
