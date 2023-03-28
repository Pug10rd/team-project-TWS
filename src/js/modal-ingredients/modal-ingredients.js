const closeModalBtn = document.querySelector('[data-modal-close]');
const backdrop = document.querySelector('.backdrop-cocktails');
const backdropModalCocktails = document.querySelector('.backdrop-cocktails');

closeModalBtn.addEventListener('click', closeModal);
backdropModalCocktails.addEventListener('click', e => {
  if (!e.target.classList.contains('backdrop-cocktails')) {
    return;
  }

  closeModal();
});

function closeModal() {
  backdrop.classList.add('hidden');
  document.body.style.overflow = 'auto';
}
