import { filmAPI } from "./js/films-api";
import { markUpMovie } from "./js/markup";
import common from './js/common.json';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const container = document.querySelector('.container');
const target = document.querySelector('.js-guard');
const api = new filmAPI();
api.PAGE = 1;
const arr = [];
let cardArr = JSON.parse(localStorage.getItem(common.LS_CARDS));
if (!cardArr) {
    cardArr = [];
};

console.log(cardArr)

container.addEventListener('click', handlerAdd);

loadCards();

const options = {
  rootMargin: "300px",
};
const observer = new IntersectionObserver(handlerLoadMore, options);

async function loadCards() {
    try {
        const cards = await api.loadAPI();

        container.insertAdjacentHTML('beforeend', markUpMovie(cards.results));
        console.log(api.PAGE)
            
        observer.observe(target);
        
    } catch (error) {
        console.log(error)
    }
}



function handlerAdd(event) {
    if (!event.target.classList.contains('js-add-btn')) {
        return;
    }

    const favCard = event.target.closest('.js-item');
    const favCardId = Number(favCard.dataset.id);
    addFavorite(favCardId);
    console.log(favCardId)
    
}

async function addFavorite(favCardId) {
    try {
        
        const fcards = await api.loadAPI();
        arr.push(fcards.results);
            
            console.log(arr)
    
        const currentCard = arr.find(({ id }) => id === favCardId);
        console.log(currentCard)
        console.log(favCardId)
        const idx = cardArr.findIndex(({ id }) => id === favCardId);

        if (idx !== -1) {
            Notify.failure('This movie has already been added to your favorites')
            return
        } else {
            cardArr.push(currentCard);
            localStorage.setItem(common.LS_CARDS, JSON.stringify(cardArr));
            console.log(localStorage)
        }

        
    
    } catch (error) {
        console.log(error);
    }
}
function handlerLoadMore(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            
            loadMoreCards();
        }
    })
};

async function loadMoreCards() {
    try {
        api.PAGE += 1;
        const moreCards = await api.loadAPI();

        container.insertAdjacentHTML('beforeend', markUpMovie(moreCards.results));

        if (api.PAGE >= moreCards.total_pages) {
                observer.unobserve(target);
            };
        
    } catch (error) {
        console.log(error)
    }
}




