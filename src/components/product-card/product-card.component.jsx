import { useDispatch } from 'react-redux';

import Button from '../button/button.component';
import './product-card.styles.scss';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = product;

  function handleAddItem(product) {
    dispatch({ type: 'cart/addItem', payload: product });
  }
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={() => handleAddItem(product)}>
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
