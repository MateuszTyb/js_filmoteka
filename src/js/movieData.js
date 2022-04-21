const watchedBtn = document.querySelector(".watched");
const queueBtn = document.querySelector(".queue");
import { fetchMovieData } from "./fetcher.js";

let movieData = {
  photo: "",
  title: "",
  votesAvarage: "",
  votes: "",
  popularity: "",
  orginalTitle: "",
  genre: "",
  about: "",
  id: "",
};

const openModalCard = document.querySelector("[data-modal-open]");

const getModalData = (e) => {
  let modalData = e.target.closest(".movie-card");
  let movieId = modalData.getAttribute("data-id");
  try {
    if (movieId !== null) {
      renderMovie(movieId);
    }
  } catch (error) {
    console.log("UPS ! Coś poszło nie tak :(");
  }
};

openModalCard.addEventListener("click", getModalData);
// ====================================================

function renderMovie(movieId) {
  clearModal();
  fetchMovieData(movieId).then((res) => {
    let data = res;
    movieData.photo = data.poster_path;
    movieData.title = data.title;
    movieData.votesAvarage = data.vote_average;
    movieData.votes = data.vote_count;
    movieData.popularity = data.popularity;
    movieData.orginalTitle = data.original_title;
    const genresArray = data.genres;
    let genres = genresArray.map((genresArray) => genresArray.name);
    movieData.genre = genres.toString();
    movieData.about = data.overview;
    movieData.id = data.id;

    document
      .querySelector(".movie")
      .insertAdjacentHTML(
        "afterbegin",
        `<img class="modal__movie-photo" src="https://image.tmdb.org/t/p/original${movieData.photo}" alt="photo" />`
      );
    document
      .querySelector(".modal__movie-title")
      .insertAdjacentHTML("afterbegin", `${movieData.title}`);
    document
      .querySelector(".vote")
      .insertAdjacentHTML("afterbegin", `${movieData.votesAvarage}`);
    document
      .querySelector(".votes")
      .insertAdjacentHTML("afterbegin", `${movieData.votes}`);
    document
      .querySelector(".popularity")
      .insertAdjacentHTML("afterbegin", `${movieData.popularity}`);
    document
      .querySelector(".orginal-title")
      .insertAdjacentHTML("afterbegin", `${movieData.orginalTitle}`);
    document
      .querySelector(".genre")
      .insertAdjacentHTML("afterbegin", `${movieData.genre}`);
    document
      .querySelector(".modal__about")
      .insertAdjacentHTML("afterbegin", `${movieData.about}`);
  });
  buttonColorsWatched(movieId);
  buttonColorsQueue(movieId);
}

function buttonColorsWatched(movieId) {
  let watchedMovie = JSON.parse(localStorage.getItem("watchedMovie"));
  if (watchedMovie == null) watchedMovie = [];
  for (let movie of watchedMovie) {
    if (movieId == movie.ID) {
      watchedBtn.style.backgroundColor = "#ff6b01";
      watchedBtn.style.color = "white";
      watchedBtn.style.borderStyle = "none";
      watchedBtn.innerHTML = "Watched";
      break;
    } else {
      watchedBtn.style.backgroundColor = "#FFFFFF";
      watchedBtn.style.color = "black";
      watchedBtn.style.border = "1px solid black";
      watchedBtn.innerHTML = "Add to watched";
    }
  }
}

function buttonColorsQueue(movieId) {
  let queue = JSON.parse(localStorage.getItem("queue"));
  if (queue == null) queue = [];
  for (let movie of queue) {
    if (movieId == movie.ID) {
      queueBtn.style.backgroundColor = "#ff6b01";
      queueBtn.style.color = "white";
      queueBtn.style.borderStyle = "none";
      queueBtn.innerHTML = "In queue";
      break;
    } else {
      queueBtn.style.backgroundColor = "#FFFFFF";
      queueBtn.style.color = "black";
      queueBtn.style.border = "1px solid black";
      queueBtn.innerHTML = "Add to queue";
    }
  }
}

function clearModal() {
  document.querySelector(".movie").innerHTML = "";
  document.querySelector(".modal__movie-title").innerHTML = "";
  document.querySelector(".vote").innerHTML = "";
  document.querySelector(".votes").innerHTML = "";
  document.querySelector(".popularity").innerHTML = "";
  document.querySelector(".orginal-title").innerHTML = "";
  document.querySelector(".genre").innerHTML = "";
  document.querySelector(".modal__about").innerHTML = "";
}

function addToWatched() {
  let watchedMovie = JSON.parse(localStorage.getItem("watchedMovie"));
  if (watchedMovie == null) watchedMovie = [];

  let movieTitleForConsole = { movieTitle: movieData.title, ID: movieData.id };
  let newMovie = { movieTitle: movieData.title, ID: movieData.id };

  for (let movie of watchedMovie) {
    if (movie.ID == newMovie.ID) {
      newMovie = "";
      break;
    }
  }

  if (newMovie === "") {
    for (let movie of watchedMovie) {
      if (movie.ID == movieTitleForConsole.ID) {
        let movieIndex = watchedMovie.indexOf(movie);
        watchedMovie.splice(movieIndex, 1);
        localStorage.setItem("watchedMovie", JSON.stringify(watchedMovie));
        buttonColorsWatched(movie.ID);
        if (watchedMovie.length == 0) {
          watchedBtn.style.backgroundColor = "#FFFFFF";
          watchedBtn.style.color = "black";
          watchedBtn.style.border = "1px solid black";
          watchedBtn.innerHTML = "Add to watched";
        }
        break;
      }
    }
  } else {
    watchedMovie.push(newMovie);
    localStorage.setItem("watchedMovie", JSON.stringify(watchedMovie));
    buttonColorsWatched(newMovie.ID);
  }
}

function addToQueue() {
  let queue = JSON.parse(localStorage.getItem("queue"));
  if (queue == null) queue = [];

  let movieTitleForConsole = { movieTitle: movieData.title, ID: movieData.id };
  let newMovie = { movieTitle: movieData.title, ID: movieData.id };

  for (let movie of queue) {
    if (movie.ID == newMovie.ID) {
      newMovie = "";
      break;
    }
  }

  if (newMovie === "") {
    for (let movie of queue) {
      if (movie.ID == movieTitleForConsole.ID) {
        let movieIndex = queue.indexOf(movie);
        queue.splice(movieIndex, 1);
        localStorage.setItem("queue", JSON.stringify(queue));
        buttonColorsQueue(movie.ID);
        if (queue.length == 0) {
          queueBtn.style.backgroundColor = "#FFFFFF";
          queueBtn.style.color = "black";
          queueBtn.style.border = "1px solid black";
          queueBtn.innerHTML = "Add to queue";
        }
        break;
      }
    }
  } else {
    queue.push(newMovie);
    localStorage.setItem("queue", JSON.stringify(queue));
    buttonColorsQueue(newMovie.ID);
  }
}

watchedBtn.addEventListener("click", addToWatched);

queueBtn.addEventListener("click", addToQueue);

export { addToWatched, addToQueue };
