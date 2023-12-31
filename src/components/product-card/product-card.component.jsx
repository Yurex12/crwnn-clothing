import { useCartIcon } from '../../contexts/cart.context';
import Button from '../button/button.component';
import './product-card.styles.scss';

function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useCartIcon();

  function handleAddToCart() {
    addItemToCart(product);
  }
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={handleAddToCart}>
        Add to cart
      </Button>
    </div>
  );
}

export default ProductCard;
