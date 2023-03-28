const btnIngredients = document.querySelector('.js-modal-ingredient');

btnIngredients.addEventListener('click', addIngToFavorite);

function addIngToFavorite(evt) {
  const id = evt.target.value;
  const favoriteIng = JSON.parse(localStorage.getItem('favoriteIng') || '[]');

  if (evt.target.dataset.action === 'favorite' && !favoriteIng.includes(id)) {
    favoriteIng.push(id);
  } else if (evt.target.dataset.action === 'remove_favorite' && favoriteIng.includes(id)) {
    const index = favoriteIng.findIndex(_id => _id === id);

    favoriteIng.splice(index, 1);
  }

  // if (!favoriteIng.includes(id)) {
    
  //   btnIngredients.textContent = 'Remove from favorites';
  // } else {
    
  //   btnIngredients.textContent = 'Add to favorites';
  // }

  localStorage.setItem('favoriteIng', JSON.stringify(favoriteIng));
}

function findIdEl(ing) {
  let favoriteIng = JSON.parse(localStorage.getItem('favoriteIng'));
  if (!favoriteIng) {
    localStorage.setItem('favoriteIng', JSON.stringify([]));
  }
  if (ing.includes(ing.idIngredient)) {
  } else {
  }
}

export function createMarkupIng(ing) {
  return ing
    .map(e => {
      return `
  <div class="ing__cocktails">
  <div class="ing__cocktails-wrapper">
    <h3 class="ing__text-name">${e.strIngredient}</h3>
    <p class='ing__text'>${e.strType || 'No type found'}</p>
    <div class="ing__btns">
    <button class="ing__button-primary js-ingredient" data-ingredient="${e.strIngredient}">Learn more</button>
    <button class='ing__button-secondary' data-id="${
      e.idIngredient
    }">Remove</button>
    </div>
    </div>
  </div>`;
    })
    .join('');
}
