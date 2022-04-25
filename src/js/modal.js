(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalWindow: document.querySelector(".modal"),
    galleryMovie: document.querySelector(".gallery"),
    prevBtn: document.querySelector(".modal__prev-btn"),
    nextBtn: document.querySelector(".modal__next-btn"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener('click', toggleModal);
  refs.modalWindow.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      refs.modal.classList.add("is-hidden");
    }
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  };


  let currentCard
  refs.galleryMovie.addEventListener('click', (e) => {
      currentCard = e.target.parentNode.parentNode;
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      currentCard.nextElementSibling.firstElementChild.firstElementChild.click();
      toggleModal();
    } else if (e.key === 'ArrowLeft') {
      currentCard.previousElementSibling.firstElementChild.firstElementChild.click();
      toggleModal();
      }
    }
  );

  refs.prevBtn.addEventListener('click', () => {
    currentCard.previousElementSibling.firstElementChild.firstElementChild.click();
    toggleModal();;
  });

  refs.nextBtn.addEventListener('click', () => {
    currentCard.nextElementSibling.firstElementChild.firstElementChild.click();
    toggleModal();
  });
})();