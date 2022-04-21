const studentButton = document.getElementById('students-modal');
const studentContainer = document.getElementById('students-container');

studentButton.addEventListener('click', openModal);
studentContainer.addEventListener('click', closeModal);

function openModal() {
    modalContainer.removeAttribute('.class');
    modalContainer.classList.add('class-visible');
    document.body.classList.add('class-active');
  }

  function closeModal() {
    modalContainer.classList.add('class-hidden');
    document.body.classList.remove('class-active');
    setTimeout(() => {
    modalContainer.classList.remove('class-visible');
    modalContainer.classList.remove('class-hidden');
    }, 2000);
  }