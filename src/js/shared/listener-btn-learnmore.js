import { handleCocktailClickAction } from '../catalog/handle-cocktails-click-action';
import { handleIngredientModalOpen } from './handle-ingredient-modal-open';
const catalogList = document.querySelector('.catalog__list');

catalogList.addEventListener('click', handleCocktailClickAction);
