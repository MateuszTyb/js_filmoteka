const studentButton = document.getElementById('students-modal');
const studentContainer = document.getElementById('students-container');

studentButton.addEventListener('click', openModal);
studentContainer.addEventListener('click', closeModal);

function openModal() {
    studentContainer.removeAttribute('.class');
    studentContainer.classList.add('visible');
    document.body.classList.add('students-active');
  }

  function closeModal() {
    studentContainer.classList.add('unvisible');
    document.body.classList.remove('students-active');
    setTimeout(() => {
    studentContainer.classList.remove('visible');
    studentContainer.classList.remove('unvisible');
    }, 2000);
  }