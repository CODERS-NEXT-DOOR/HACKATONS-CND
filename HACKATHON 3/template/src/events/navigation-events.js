import { ABOUT, CATEGORIES, CONTAINER_SELECTOR, HOME, FAVORITES } from '../common/constants.js'; // ABOUT imported additionally
import { getFavorites } from '../data/favorites.js';
import { loadCategories, loadCategory, loadMovies, loadSingleMovie } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js'; // imported additionally
import { toCategoriesView } from '../views/category-view.js'; // imported additionally
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView, toSingleMovieView, toFavoriteMovies } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';

// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

    // missing partial implementation
    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();


    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    /* if the app supports error logging, use default to log mapping errors */
    default: return null;
  }

};

export const renderMovieDetails = (id = null) => {
  // missing implementation
  const movie = loadSingleMovie(id);

  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(movie);
};

export const renderCategory = (categoryId = null) => {
  const category = loadCategory(categoryId);
  const movies = loadMovies(categoryId);

  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  // missing implementation
  const categories = loadCategories();
  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
};

const renderFavorites = () => {
  const favorites = getFavorites();
  const movies = favorites.map(movieId => loadSingleMovie(movieId));

  q(CONTAINER_SELECTOR).innerHTML = toFavoriteMovies(movies);
};

const renderAbout = () => {
  // missing implementation
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};
