import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { getCategories } from '../../store/categories/categories.reducer';

function CategoriesPreview() {
  const categoriesMap = useSelector(getCategories);

  return (
    <>
      {Object.keys(categoriesMap)?.map((title, index) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}

export default CategoriesPreview;
