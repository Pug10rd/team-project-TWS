import ApiService from '../api/api-service';
const apiService = new ApiService();

const favWrapper = document.querySelector('.favorite__container'); // fixed: remove "container"

export default class favCocktail {
  async render() {
    const favIds = JSON.parse(localStorage.getItem('favIds') ?? '{}');

    for (let id in favIds) {
      const drink = await apiService.fetchDataById(id);

      const code = this.renderfavCocktail(drink[0]);

      favWrapper.insertAdjacentHTML('beforeend', code);
    }

    this.addListeners();
  }

  async renderByLetter(letter) {
    const favIds = JSON.parse(localStorage.getItem('favIds') ?? '{}');

    for (let id in favIds) {
      const drink = await apiService.fetchDataById(id);

      if (!drink[0].strDrink.toLowerCase().startsWith(letter.toLowerCase()))
        continue;

      const code = this.renderfavCocktail(drink[0]);

      favWrapper.insertAdjacentHTML('beforeend', code);
    }

    this.addListeners();
  }

  removeCocktails() {
    favWrapper.innerHTML = '';
  }

  addListeners() {
    favWrapper
      .querySelectorAll('._buttons')
      .forEach(e =>
        e.addEventListener('click', this.onRemoveFromFavorite.bind(e))
      );
  }

  onRemoveFromFavorite() {
    const id = this.attributes['data-id'].value;
    const favIds = JSON.parse(localStorage.getItem('favIds') ?? '{}');

    delete favIds[id];

    localStorage.setItem('favIds', JSON.stringify(favIds));
    this.parentElement.parentElement.remove();
  }

  renderfavCocktail(cocktails) {
    if (!cocktails) {
      return '';
    }

    // return the HTML code with a remove button
    return `
      <div class="cocktail">
        <img src="${cocktails.strDrinkThumb}" alt="${cocktails.strDrink}">
        <h3>${cocktails.strDrink}</h3>
        <button class="_buttons" data-id="${cocktails.idDrink}">Remove</button>
      </div>
    `;
  }
}