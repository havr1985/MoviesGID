import { filmAPI } from "./js/films-api";
import { markUpMovie } from "./js/markup";
import { markUpPeople } from "./js/markup";
import { markUpTv } from "./js/markup";
import common from './js/common.json'
import SlimSelect from 'slim-select'

const select = document.querySelector('.category-select');
const container = document.querySelector('.container');
const target = document.querySelector('.js-guard');
const api = new filmAPI();
const cardArr = JSON.parse(localStorage.getItem(common.LS_CARDS)) ?? [];


new SlimSelect({
    select: '#selectElement',
    settings: {
    placeholderText: 'Please select a category',
  }
   
})

select.addEventListener('change', onChange);
container.addEventListener('click', handlerAdd);


function onChange(event) {
    container.innerHTML = '';
    api.PAGE = 1;
    let val = event.target.value;
    if (!val) {
        return;
    }
    api.CHECKED = val;
    loadCards();
}

const options = {
  rootMargin: "300px",
};
const observer = new IntersectionObserver(handlerLoadMore, options);

async function loadCards() {
    try {
        const cards = await api.loadAPI();
        if (api.CHECKED === 'movie') {
            container.insertAdjacentHTML('beforeend', markUpMovie(cards.results));
            
        };
        if (api.CHECKED === 'person') {
            container.insertAdjacentHTML('beforeend', markUpPeople(cards.results));
        };
        if (api.CHECKED === 'tv') {
            container.insertAdjacentHTML('beforeend', markUpTv(cards.results));
        }
        observer.observe(target);
        if (api.PAGE >= cards.total_pages) {
                observer.unobserve(target);
            };
        console.log(api.PAGE);
    } catch (error) {
        console.log(error)
    }
}

function handlerLoadMore(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entries)
            api.PAGE += 1;
            loadCards();
        }
    })
};

function handlerAdd(event) {
    if (!event.target.classList.contains('js-add-btn')) {
        return;
    }

    const favCard = event.target.closest('.js-item');
    const favCardId = Number(favCard.dataset.id);
    addFavorite(favCardId);
    
}

async function addFavorite(favCardId) {
    try {
        const fcards = await api.loadAPI();
        const currentCard = fcards.results.find(({ id }) => id === favCardId);
        const idx = cardArr.findIndex(({ id }) => id === favCardId);

        if (idx !== -1) {
            return
        } else {
            cardArr.push(currentCard);
            console.log(cardArr)
        }

        localStorage.setItem(common.LS_CARDS, JSON.stringify(cardArr));
        console.log(localStorage)
    
    } catch (error) {
        console.log(error);
    }
}





