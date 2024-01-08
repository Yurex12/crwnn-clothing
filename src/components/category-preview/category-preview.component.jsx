import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import './category-preview.styles.scss';

function CategoryPreview({ title, products }) {
  return (
    <div className='category-preview-container'>
      <Link to={title}>
        <span className='title'>{title.toLowerCase()}</span>
      </Link>

      <div className='preview'>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
