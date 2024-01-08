import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './category.styles.scss';

import ProductCard from '../../components/product-card/product-card.component';
import { useCategories } from '../../contexts/categories.context';

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useCategories();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  return (
    <>
      <h2 className='category-title'>{category}</h2>
      <div className='category-container'>
        {products?.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}

export default Category;
