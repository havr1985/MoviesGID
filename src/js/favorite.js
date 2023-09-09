import common from './common.json';
import { favMarkUpMovie } from './favmarkup';
import { favMarkUpPeople } from './favmarkup';
import { favMarkUpTv } from './favmarkup';
import SlimSelect from 'slim-select';

new SlimSelect({
    select: '#selectElement',
    settings: {
    placeholderText: 'Please select a category',
  }
   
})

const favCard = JSON.parse(localStorage.getItem(common.LS_CARDS)) ?? [];
console.log(favCard[0].media_type)
const list = document.querySelector('.js-list');
const clear = document.querySelector('.js-clear-btn');

clear.addEventListener('click', clearFavorite);

list.insertAdjacentHTML('beforeend', favMarkUpMovie(favCard));

function clearFavorite() {
    localStorage.removeItem(common.LS_CARDS);
    list.innerHTML = '';
}