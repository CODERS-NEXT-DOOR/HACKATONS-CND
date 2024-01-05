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
<div>
  <a href="#" class="movie-link" data-movie="${movie.id}">${movie.title}</a>
  ${renderFavoriteStatus(movie.id)}
</div>
`;

const toMovieDetailed = (movie) => `
${movie.genre}|${movie.director}|${movie.stars.join(', ')}|${movie.description}
`; // put it with div - each of them
