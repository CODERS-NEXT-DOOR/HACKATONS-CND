export const toCategoriesView = (categories) => `
<div id="categories">
  <h1>Categories</h1>
  <div class="content">
    ${categories.map(toSingleCategoryView).join('\n')}
  </div>
</div>
`;

const toSingleCategoryView = (category) => `
<span class="category-box">
  <a href="#" class="category-link" data-category="${category.id}">${category.name}</a>
</span>
`;
