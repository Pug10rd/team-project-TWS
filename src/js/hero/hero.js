const checkbox = document.querySelector('.check-box');
const toChoose = document.querySelector('.to-choose');
const letters = document.querySelectorAll('.js-letter');

toChoose.addEventListener('click', function (event) {
  const target = event.target.closest('.js-letter');
  if (target) {
    event.preventDefault();
    checkbox.childNodes[0].nodeValue = target.value;
    toChoose.classList.remove('to-choose--visible');
  }
});

checkbox.addEventListener('click', () => {
  toChoose.classList.toggle('to-choose--visible');
});
