const initQualification = () => {
  /*==================== QUALIFICATION TABS ====================*/
  const tabs = document.querySelectorAll("[data-target]");
  const tabContents = document.querySelectorAll("[data-content]");

  if (tabs.length > 0 && tabContents.length > 0) {
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        if (target) {
          tabContents.forEach(tabContent => {
            tabContent.classList.remove("qualification__active");
          });
          target.classList.add("qualification__active");

          tabs.forEach(t => {
            t.classList.remove("qualification__active");
          });
          tab.classList.add("qualification__active");
        }
      });
    });
  }
};

export default initQualification;
