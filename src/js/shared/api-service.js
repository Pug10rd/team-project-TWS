const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

function getRandomCocktail() {
  return fetch(`${API_URL}/random.php`).then(response => response.json());
}

function getCocktailsByName(name) {
  return fetch(`${API_URL}/search.php?s=${name}`).then(response =>
    response.json()
  );
}

function getCocktailsByFirstLetter(letter) {
  return fetch(`${API_URL}/search.php?f=${letter}`).then(response =>
    response.json()
  );
}

function getCocktailsDetailsById(id) {
  return fetch(`${API_URL}/lookup.php?i=${id}`).then(response =>
    response.json()
  );
}

function getCocktailIngredientByName(name) {
  return fetch(`${API_URL}/search.php?i=${name}`).then(response =>
    response.json()
  );
}

function getCocktailIngredientById(id) {
  return fetch(`${API_URL}/lookup.php?iid=${id}`).then(response =>
    response.json()
  );
}

export {
  getRandomCocktail,
  getCocktailsByName,
  getCocktailsByFirstLetter,
  getCocktailsDetailsById,
  getCocktailIngredientByName,
  getCocktailIngredientById,
};
