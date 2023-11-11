import './category-directory.styles.scss';
import CategotyItem from '../category-item/category-item.component';

const CategoryDirectory = ({categories}) => {

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategotyItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
