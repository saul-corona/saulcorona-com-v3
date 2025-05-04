const initServices = () => {
  /*==================== SERVICES MODAL ====================*/
  const modalViews = document.querySelectorAll(".services__modal");
  const modalBtns = document.querySelectorAll(".services__button");
  const modalCloses = document.querySelectorAll(".services__modal-close");

  if (modalViews.length > 0 && modalBtns.length > 0 && modalCloses.length > 0) {
    let modal = function (modalClick) {
      if (modalViews[modalClick]) {
        modalViews[modalClick].classList.add("active-modal");
      }
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
  }
};

export default initServices;
