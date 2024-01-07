export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="categories-container">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

const toSingleCategoryView = (category) => `
<div class="category-box">
  <h1>${category.name}</h1>
  <p>10 movies</p>
  <a href="#" class="category-link" data-category="${category.id}">VIEW</a>
</div>
`;
