const studentButton = document.getElementById('students-modal');
const studentContainer = document.getElementById('students-container');

studentButton.addEventListener('click', openModal);
studentContainer.addEventListener('click', closeModal);

function openModal() {
    modalContainer.removeAttribute('.class');
    modalContainer.classList.add('visible');
    document.body.classList.add('students-active');
  }

  function closeModal() {
    modalContainer.classList.add('unvisible');
    document.body.classList.remove('students-active');
    setTimeout(() => {
    modalContainer.classList.remove('visible');
    modalContainer.classList.remove('unvisible');
    }, 2000);
  }