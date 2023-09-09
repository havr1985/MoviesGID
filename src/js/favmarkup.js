const defaultsPoster = "https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg";

export function favMarkUpMovie(arr) {
    return arr.map(({ poster_path, release_date, original_title, vote_average, id }) => `<li data-id="${id}" class="item js-item">
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

export function favMarkUpPeople(arr) {
    return arr.map(({ profile_path, original_name, known_for_department, popularity, id }) => `<li data-id="${id}" class="item js-item" >
        <img src="${
        profile_path
          ? "https://image.tmdb.org/t/p/w300" + profile_path
          : defaultsPoster}" alt="${original_name}">
        <div class="card-info">
          <h2 class="title">${original_name}</h2>
          <div class="card-info-val"
          <p class="date">POSITION: ${known_for_department}</p>
          <p class="average">POPULARITY: ${popularity}</p></div>
          <button class="add-btn js-add-btn">Add favorite</button>
        </div>
      </li>`).join(' ');
}

export function favMarkUpTv(arr) {
    return arr.map(({poster_path, original_name, first_air_date, vote_average, id}) => `<li data-id="${id}" class="item js-item">
        <img src="${
        poster_path
          ? "https://image.tmdb.org/t/p/w300" + poster_path
          : defaultsPoster}" alt="${original_name}">
        <div class="card-info">
          <h2 class="title">${original_name}</h2>
          <div class="card-info-val"
          <p class="date">FIRST AIR DATE: ${first_air_date}</p>
          <p class="average">AVERAGE: ${vote_average}</p></div>
          <button class="add-btn js-add-btn">Add favorite</button>
        </div>
      </li>`).join(' ');
}