import ProductCard from '../../components/product-card/product-card.component';
import { useProducts } from '../../contexts/product.context';

import './shop.styles.scss';

function Shop() {
  const { products } = useProducts();

  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
