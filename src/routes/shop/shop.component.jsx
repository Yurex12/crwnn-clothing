import { useCategories } from '../../contexts/categories.context';

import './shop.styles.scss';
import CategoryPreview from '../../components/category-preview/category-preview.component';

function Shop() {
  const { categoriesMap } = useCategories();

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((title, index) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
}

export default Shop;
