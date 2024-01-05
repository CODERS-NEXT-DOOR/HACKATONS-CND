import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

export const loadCategories = () => {
  return getCategories();
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  return getMoviesGeneralInfo(categoryId);
};

export const loadSingleMovie = (id) => {
  return getMovieById(id);
};

export const loadSearchMovies = (searchTerm = '') => {
  // missing implementation
};
