const api = {
  baseUrl: 'https://api.themoviedb.org',
  apiKey: '7f0b2ade8b1437f0cdd83125131889c8',
};

async function dataMovieFether(movieId) {
  const response = await fetch(
    `${api.baseUrl}/3/movie/${movieId}?api_key=${api.apiKey}&language=en-US`,
  );
  return response.json();
}

export { dataMovieFether };
