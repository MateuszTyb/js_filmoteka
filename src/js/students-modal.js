const studentButton = document.getElementById('students-modal');
const studentContainer = document.getElementById('students-container');

studentButton.addEventListener('click', openModal);
studentContainer.addEventListener('click', closeModal)

function openModal() {
    modalContainer.removeAttribute('.class');
    modalContainer.classList.add('klasa widzialna');
    document.body.classList.add('klasa active');
  }

  function closeModal() {
    modalContainer.classList.add('klasa odpowiedzialna za bycie niewidaka');
    document.body.classList.remove('klasa active');
    setTimeout(() => {
    modalContainer.classList.remove('klasa widzialna');
    modalContainer.classList.remove('klasa odpowiedzialna za bycie niewidaka');
    }, 2000);
  }