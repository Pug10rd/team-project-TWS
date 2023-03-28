import { createMarkupIng } from '../shared/add-coctails-to-ingridient';
import { getCocktailIngredientById } from '../shared/api-service';
import { Paginator } from '../catalog/pagination/paginator';

const refs = {
  ingEl: document.querySelector('.js-favorite__ing'),
};

const favoriteCocktailsPaginator = new Paginator({
  selector: '.paginator',
  drawMarkup: ing => {
    refs.ingEl.innerHTML = createMarkupIng(ing);
      window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
  }
});

async function onLoad() {
  const ingridients = JSON.parse(localStorage.getItem('favoriteIng') || '[]');
  const promises = getIngridients(ingridients);
  const res = await Promise.all(promises);

  favoriteCocktailsPaginator.update(res)
}
onLoad();
function getIngridients(ing) {
  return ing.map(ingridients => {
    return getCocktailIngredientById(ingridients).then(response => {
      return response.ingredients[0];
    });
  });
}

refs.ingEl.addEventListener('click', e => {
  if (e.target.nodeName !== 'BUTTON' || e.target.textContent !== 'Remove')
    return;
  const id = e.target.dataset.id;
  console.log(id);
  const savedIngrIds = JSON.parse(localStorage.getItem('favoriteIng'));
  
  if (savedIngrIds) {
    const idIndex = savedIngrIds.findIndex(savedId => savedId === id);

    savedIngrIds.splice(idIndex, 1);

    localStorage.setItem('favoriteIng', JSON.stringify(savedIngrIds));
    e.target.closest('.ing__cocktails').remove();
  }  
});
const ingridients = JSON.parse(localStorage.getItem('favoriteIng') || '[]');
