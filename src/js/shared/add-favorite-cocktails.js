import { getCocktailsDetailsById } from "./api-service";
import { createCocktailsMarkup } from "../catalog/create-cocktails-markup";
import { handleCocktailClickAction } from "../catalog/handle-cocktails-click-action";
import { Paginator } from "../catalog/pagination/paginator";

const noFavoriteCocktails = document.querySelector('.favorite__text');
const favoriteCocktailsContainer = document.querySelector('.js-favorite__cocktails');
const favoriteCocktails = JSON.parse(localStorage.getItem('favoriteCocktails') || '[]');
const promises = favoriteCocktails.map(id => {
    return getCocktailsDetailsById(id).then(res => res.drinks[0]);
});

const favoriteCocktailsPaginator = new Paginator({
    selector: '.paginator',
    drawMarkup: cocktails => {
        favoriteCocktailsContainer.innerHTML = createCocktailsMarkup(cocktails);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
    }
});

Promise.all(promises).then(cocktails => {
    if(cocktails?.length) {
        noFavoriteCocktails.classList.add('hidden');
        favoriteCocktailsPaginator.update(cocktails)
    } else {
        noFavoriteCocktails.classList.remove('hidden');
        favoriteCocktailsContainer.innerHTML = '';
        favoriteCocktailsPaginator.hidePaginator();
    }
});


favoriteCocktailsContainer.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'BUTTON') {
        return;
    }

    if (e.target.dataset.action === 'remove_favorite') {
        e.target.closest('.catalog__item').remove();
    }

    handleCocktailClickAction(e);

    if (!favoriteCocktailsContainer.children.length) {
        noFavoriteCocktails.classList.remove('hidden');
    }
});

