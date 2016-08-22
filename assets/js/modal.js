let resumeModal = document.getElementsByClassName('resume-modal')[0];
let modalLinks = document.getElementsByClassName('resume-link');
let closeButton = document.getElementsByClassName('close-modal')[0];

function openModal() {
  resumeModal.style.display = 'block';
}

function closeModal() {
  resumeModal.style.display = 'none';
}

Array.from(modalLinks).forEach((link) => {
  link.onclick = openModal;
});

closeButton.onclick = closeModal;

window.onclick = function(event) {
  if (event.target === resumeModal) {
    closeModal();
  }
};
