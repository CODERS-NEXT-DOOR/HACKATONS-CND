import { CONTAINER_SELECTOR, HOME } from '../common/constants.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView } from '../views/movie-views.js';
import { q, setActiveNav } from './helpers.js';

// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

      // missing partial implementation

    /* if the app supports error logging, use default to log mapping errors */
    default: return null;
  }

};

export const renderMovieDetails = (id = null) => {
  // missing implementation
};

export const renderCategory = (categoryId = null) => {
  // missing partial implementation

  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(category, movies);
};

// private functions

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderCategories = () => {
  // missing implementation
};

const renderFavorites = () => {
  // missing implementation
};

const renderAbout = () => {
  // missing implementation
};