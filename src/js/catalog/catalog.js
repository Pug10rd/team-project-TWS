import { getRandomCocktail, getCocktailsByName } from '../shared/api-service';
import { getCocktailsAmountPerPage } from '../shared/get-cocktails-amount-per-page';
import { createCocktailsMarkup } from './create-cocktails-markup';
import { Paginator } from './pagination/paginator';

const refs = {
  title: document.querySelector('.catalog__title'),
  list: document.querySelector('.catalog__list'),
  notFound: document.querySelector('.coctails__wrapper-found'),
};

const catalogPaginator = new Paginator({
  selector: '.paginator',
  drawMarkup: cocktails => {
    refs.list.innerHTML = createCocktailsMarkup(cocktails);
    window.scrollTo({
      top: 700,
      behavior: 'smooth',
    });
  },
});

function getRandomCoctails(amount) {
  return Array(amount)
    .fill(null)
    .map(() => getRandomCocktail().then(res => res.drinks[0]));
}

async function showInitialCoctails() {
  const cocktails = JSON.parse(localStorage.getItem('query'));
  
  if (cocktails) {
    if (!cocktails.length) {
      refs.title.textContent = '';
      refs.list.innerHTML = '';
      refs.notFound.classList.remove('hidden');
      refs.title.classList.add('hidden');
    } else {
      catalogPaginator.update(cocktails);
    }

    localStorage.removeItem('query');
  } else {
    const cocktailsAmount = getCocktailsAmountPerPage();
    const cocktailsPromises = getRandomCoctails(cocktailsAmount);
    const cocktails = await Promise.all(cocktailsPromises);

    refs.list.innerHTML = createCocktailsMarkup(cocktails);
  }
}

showInitialCoctails();
