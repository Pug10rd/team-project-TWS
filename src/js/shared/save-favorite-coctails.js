export function addCocktailToFavorite(cocktailId) {
    const favoriteCocktailIds = JSON.parse(localStorage.getItem('favoriteCocktails') || '[]');

    if (!favoriteCocktailIds.includes(cocktailId)) {
        favoriteCocktailIds.push(cocktailId);
        localStorage.setItem('favoriteCocktails', JSON.stringify(favoriteCocktailIds));
    }
}

export function removeCoctailFromFavorite(cocktailId) {
    const favoriteCocktailIds = JSON.parse(localStorage.getItem('favoriteCocktails') || '[]');
    const cocktailIndex = favoriteCocktailIds.findIndex(id => id === cocktailId);

    if (cocktailIndex !== - 1) {
        favoriteCocktailIds.splice(cocktailIndex, 1);

        localStorage.setItem('favoriteCocktails', JSON.stringify(favoriteCocktailIds));
    }
}