import './category-directory.styles.scss';

import DirectoryItem from '../directory-item/directory-item.component';

const CategoryDirectory = ({ categories }) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryDirectory;
