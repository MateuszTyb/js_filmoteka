import { spinner, target } from "./spinner.js";

const api = {
  baseUrl: "https://api.themoviedb.org",
  apiKey: "7f0b2ade8b1437f0cdd83125131889c8",
};

async function fetchMovieData(movieId) {
  spinner.spin(target);

  const response = await fetch(
    `${api.baseUrl}/3/movie/${movieId}?api_key=${api.apiKey}&language=en-US`
  );

  spinner.stop();

  return response.json();
}

export { fetchMovieData };
