// Get all clickable blocks
const blocks = document.querySelectorAll('.side-block');
const modal = document.getElementById('info-modal');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');

// Attach click events
blocks.forEach(block => {
  block.addEventListener('click', () => {
    modalText.textContent = block.getAttribute('data-info');
    modal.style.display = 'block';
  });
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close if clicking outside modal
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});