import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import {
  getCategories,
  getIsLoading,
} from '../../store/categories/categories.reducer';
import Spinner from '../../components/spinner/spinner.component';

function CategoriesPreview() {
  const categoriesMap = useSelector(getCategories);

  const isLoading = useSelector(getIsLoading);

  if (isLoading) return <Spinner />;

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
