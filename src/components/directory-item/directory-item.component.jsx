import { useNavigate } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category: { imageUrl, title, routeName } }) => {
  const navigate = useNavigate();

  const handleNaviagate = () => navigate(routeName);
  return (
    <div className='directory-item-container' onClick={handleNaviagate}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
