import { Notify } from 'notiflix';
import common from './common.json';
import { favMarkUpMovie } from './favmarkup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


let favCard = JSON.parse(localStorage.getItem(common.LS_CARDS)) ?? [];

const list = document.querySelector('.container');
const clear = document.querySelector('.js-clear-btn');

if (!favCard.length) {
  Notify.failure('No movies added');
} else {
  Notify.success(`Added ${favCard.length} of your favorite movies`);
}




clear.addEventListener('click', clearFavorite);
list.insertAdjacentHTML('beforeend', favMarkUpMovie(favCard));
list.addEventListener('click', delCards);



function delCards(event) {
  const favCardDel = event.target.closest('.js-item');
  if (!event.target.classList.contains('js-del-btn')) {
        return;
    }
  const favCardId = Number(favCardDel.dataset.id);
  favCard.forEach(function(elm, index) {
    if (favCardId === elm.id) {
      favCard.splice(index, 1);
      list.innerHTML = "";
      list.insertAdjacentHTML('beforeend', favMarkUpMovie(favCard));
      localStorage.setItem(common.LS_CARDS, JSON.stringify(favCard));
      if (!favCard.length) {
  Notify.failure('No movies added');
    } else {
  Notify.success(`Added ${favCard.length} of your favorite movies`);
    };
    }

  });
}

function clearFavorite() {
    localStorage.removeItem(common.LS_CARDS);
  list.innerHTML = '';
  Notify.failure('No movies added');
}