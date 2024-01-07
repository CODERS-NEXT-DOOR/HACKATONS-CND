import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toFavoriteMovies = (movies) => `
<div id="movies">
  <h1>Favorite movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;


export const toSingleMovieView = (movie) => `
<div id="movie">
  <h1>${movie.title} (${movie.year}) </h1>
  <div class="content">${toMovieDetailed(movie)}
  </div>
</div>
`;

export const toMovieSimple = (movie) => `
<div class="movie-simple-view">
  <h2>${movie.title}</h2>
  <h3>(${movie.year})</h3>
  <img src="${movie.poster}">
  <div class="movie-simple-bottom-content">
    <a href="#" class="movie-link" data-movie="${movie.id}">VIEW DETAILS</a>
    ${renderFavoriteStatus(movie.id)}
  </div>
</div>
`;

const toMovieDetailed = (movie) => `
<div class="movie-detailed-view">
  <div class="movie-detailed-view-poster-container">
    <img src="${movie.poster}" />
  </div>
  <div class="movie-detailed-view-info-container">
    <p>Genre: ${movie.genre}</p>
    <p>Director: ${movie.director}</p>
    <p>Starring: ${movie.stars.join(', ')}</p>
    <p>Plot: ${movie.description}</p>
  </div>
</div>
`;
