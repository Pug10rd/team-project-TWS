import { handleLearnMoreBtnClick } from "../shared/handle-Learn-More-Btn-Click";
import { addCocktailToFavorite, removeCoctailFromFavorite } from "../shared/save-favorite-coctails";

const icon = document.querySelector('.catalog__icon');


export function handleCocktailClickAction(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const action = event.target.dataset.action;
  const cocktailId = event.target.dataset.id;

    if (action === 'learn_more') {
        handleLearnMoreBtnClick(cocktailId);
    } else if (action === 'favorite') {
        // провіряємо чи є у LocalStorage ("улюблених") айді цього коктейлю, та якщо ні - добавляємо
        addCocktailToFavorite(cocktailId);
        event.target.dataset.action = 'remove_favorite';
        event.target.innerHTML = `Remove ${icon.outerHTML}`;
    } else if (action === 'remove_favorite') {
        removeCoctailFromFavorite(cocktailId);
        event.target.dataset.action = 'favorite';
        event.target.innerHTML = `Add to ${icon.outerHTML}`;
    }
}

