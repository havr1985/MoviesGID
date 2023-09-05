import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGViMWNlYjdkMDA2NzJlNGYyZWZlMDI2MTQwNWNjNiIsInN1YiI6IjY0ZjczOTllZmZjOWRlMDBhYzRmMTg5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.arW0TovcOo_eqnVO6td0Nh7eaWCU_GXyNFEcZBWV-_o'
  }
};
async function loadAPI() {

    try {
        const response = await axios.get('https://api.themoviedb.org/3/trending/person/week?',options);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
loadAPI()