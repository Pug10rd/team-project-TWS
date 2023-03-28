export function getCocktailsAmountPerPage() {
  const mobile = window.matchMedia('(max-width: 767px)')?.matches;
  const tablet = window.matchMedia('(min-width: 768px)')?.matches && window.matchMedia('(max-width: 1280px)')?.matches;

  let step = null;

  if (mobile) {
    step = 3;
  } else if (tablet) {
    step = 6;
  } else {
    step = 9;
  }
  return step;
}
