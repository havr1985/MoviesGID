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
          <button class="add-btn js-del-btn">Delete</button>
        </div>
      </li>`).join(" ");
}

