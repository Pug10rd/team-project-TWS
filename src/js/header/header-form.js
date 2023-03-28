import { handleCocktailsSearch } from '../shared/handle-cocktails-search';
import { hideMobileMenu } from './header-modal';

const searchForm = document.querySelector('.header__search-form');
const searchFormModal = document.querySelector('.header__search-form-modal');
const header = document.querySelector('.header');

searchForm.addEventListener('submit', handleCocktailsSearch);
searchFormModal.addEventListener('submit', handleCocktailsSearch);
// скролл
window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
