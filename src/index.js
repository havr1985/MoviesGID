import { filmAPI } from "./js/films-api";
import { markUpMovie } from "./js/markup";
import { markUpPeople } from "./js/markup";
import { markUpTv } from "./js/markup";
import SlimSelect from 'slim-select'

const select = document.querySelector('.category-select');
const container = document.querySelector('.container');
const target = document.querySelector('.js-guard');
const api = new filmAPI();

new SlimSelect({
    select: '#selectElement',
    settings: {
    placeholderText: 'Please select a category',
  }
   
})

select.addEventListener('change', onChange);

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

var options = {
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



