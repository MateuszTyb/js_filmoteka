(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    modalWindow: document.querySelector(".modal"),
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
  }

  let currentCard
  window.onclick = (e) => {
    console.log(e.target.parentNode.parentNode);
      currentCard = e.target.parentNode.parentNode;
  }


  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      currentCard.nextElementSibling.firstElementChild.click();
      toggleModal();
      }
    }
  );

  

})();