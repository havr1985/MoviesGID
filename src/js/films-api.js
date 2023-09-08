import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGViMWNlYjdkMDA2NzJlNGYyZWZlMDI2MTQwNWNjNiIsInN1YiI6IjY0ZjczOTllZmZjOWRlMDBhYzRmMTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.arW0TovcOo_eqnVO6td0Nh7eaWCU_GXyNFEcZBWV-_o'
  }
};

export class filmAPI{

    URL = 'https://api.themoviedb.org/3/trending/';
    CHECKED = 'person';
    DATES = 'week';
    PAGE = 1;
    
async loadAPI() {

    const response = await axios.get(`${this.URL}/${this.CHECKED}/${this.DATES}?page=${this.PAGE}`,options);
  const data = response.data;
  console.log(data);
    return data;
    
}
}