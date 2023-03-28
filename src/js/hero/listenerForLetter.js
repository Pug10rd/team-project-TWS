import { handleCocktailsSearch } from '../shared/handle-cocktails-search';

const heroBox = document.querySelector('.hero__box');
const toChoose = document.querySelector('.to-choose');

heroBox.addEventListener('click', handleCocktailsSearch);
toChoose.addEventListener('click', handleCocktailsSearch);
