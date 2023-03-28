const icon = document.querySelector('.catalog__icon');

export function createCocktailsMarkup(cocktails) {
  const favoriteCocktails = JSON.parse(localStorage.getItem('favoriteCocktails') || '[]');
  return cocktails
    .map(
      cocktail => {
        const isFavorite = favoriteCocktails.includes(cocktail.idDrink);

        return `<li class="catalog__item">
          <div class="catalog__wrapper-img">
              <img class="catalog__img" src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink} image" />
          </div>
          <h3 class="catalog__item-name">${cocktail.strDrink}</h3>
          <div class="catalog__item-actions">
              <button class="button-primary" type="button" data-action="learn_more" data-id="${cocktail.idDrink}">
                  Learn more
              </button>
              ${getFavoriteButtonTemplate(isFavorite, cocktail.idDrink)}
          </div>
      </li>`
    }).join('');
}

export function getFavoriteButtonTemplate(isFavorite, cocktailId) {
  if (!isFavorite) {
    return `<button class="button-secondary" type="button" data-action="favorite" data-id="${cocktailId}">
              Add to ${icon.outerHTML}
          </button>`
  } else {
    return `<button class="button-secondary" type="button" data-action="remove_favorite" data-id="${cocktailId}">
              Remove ${icon.outerHTML}
          </button>`
  }
}
// 
