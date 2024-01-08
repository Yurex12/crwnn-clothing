import { useCategories } from '../../contexts/categories.context';

import CategoryPreview from '../../components/category-preview/category-preview.component';

function CategoriesPreview() {
  const { categoriesMap } = useCategories();

  return (
    <>
      {Object.keys(categoriesMap).map((title, index) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}

export default CategoriesPreview;
