import { getCocktailsByName } from "./api-service";

export async function handleFavoritePageSearch(e) {
  e.preventDefault();
  const query = e.target?.elements?.search?.value?.trim() || '';
  const data = await getCocktailsByName(query);

  localStorage.setItem('query', JSON.stringify(data.drinks));
  window.location.href = 'index.html';
}