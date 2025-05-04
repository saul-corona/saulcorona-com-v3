const initSkills = () => {
  /*==================== ACCORDION SKILLS ====================*/
  const skillsContent = document.getElementsByClassName("skills__content");
  const skillsHeader = document.querySelectorAll(".skills__header");

  if (skillsContent.length > 0 && skillsHeader.length > 0) {
    function toggleSkills() {
      let itemClass = this.parentNode.className;

      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
      }

      if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
      }
    }

    skillsHeader.forEach(el => {
      el.addEventListener("click", toggleSkills);
    });
  }
};

export default initSkills;
