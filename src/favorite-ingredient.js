import './js/header/header-form';
import './js/header/header-modal';
import './js/header/theme-switch';
import './js/favorite_page/favorite_page';
import './js/shared/listener-btn-learnmore';
import './js/shared/add-coctails-to-ingridient';
import './js/shared/handle-ingredient-modal-open';

import {handleIngredientModalOpen} from './js/shared/handle-ingredient-modal-open';
import { handleFavoritePageSearch } from './js/shared/handle-favorite-page-search';
import { hideMobileMenu } from './js/header/header-modal';

const searchForm = document.querySelector('.header__search-form');
const searchFormMobile = document.querySelector('.header__search-form-modal');
const ingredientList = document.querySelector('.js-ingredients-list');

ingredientList.addEventListener('click', handleIngredientModalOpen);
searchForm.addEventListener('submit', handleFavoritePageSearch);

searchFormMobile.addEventListener('submit', (e) => {
    e.preventDefault();
    hideMobileMenu();
    handleFavoritePageSearch(e);
});
