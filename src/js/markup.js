const defaultsPoster = "https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg";

export function markUpMovie(arr) {
    return arr.map(({ poster_path, release_date, original_title, vote_average }) => `<li class="item">
        <img src="${
        poster_path
          ? "https://image.tmdb.org/t/p/w300" + poster_path
          : defaultsPoster}" alt="${original_title}">
        <div class="card-info">
          <h2 class="title">${original_title}</h2>
          <div class="card-info-val"
          <p class="date">RELEASE: ${release_date}</p>
          <p class="average">AVERAGE: ${vote_average}</p></div>
        </div>
      </li>`).join(" ");
}

export function markUpPeople(arr) {
    return arr.map(({ profile_path, original_name, known_for_department, popularity }) => `<li class="item">
        <img src="${
        profile_path
          ? "https://image.tmdb.org/t/p/w300" + profile_path
          : defaultsPoster}" alt="${original_name}">
        <div class="card-info">
          <h2 class="title">${original_name}</h2>
          <div class="card-info-val"
          <p class="date">POSITION: ${known_for_department}</p>
          <p class="average">POPULARITY: ${popularity}</p></div>
        </div>
      </li>`).join(' ');
}

export function markUpTv(arr) {
    return arr.map(({poster_path, original_name, first_air_date, vote_average}) => `<li class="item">
        <img src="${
        poster_path
          ? "https://image.tmdb.org/t/p/w300" + poster_path
          : defaultsPoster}" alt="${original_name}">
        <div class="card-info">
          <h2 class="title">${original_name}</h2>
          <div class="card-info-val"
          <p class="date">FIRST AIR DATE: ${first_air_date}</p>
          <p class="average">AVERAGE: ${vote_average}</p></div>
        </div>
      </li>`).join(' ');
}