export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

const toSingleCategoryView = (category) => // Andy // id="container"
` <div class="category"> 
  <h2>${category.name}</h2>
  <p>Number of Movies: ${category.movies.length}</p>
  <button class="view-category-btn" data-category-id="${category.id}">View Category</button>
  </div>`;
