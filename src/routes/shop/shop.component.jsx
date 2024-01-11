import { Route, Routes } from 'react-router-dom';
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { getIsLoading } from '../../store/categories/categories.reducer';
import Spinner from '../../components/spinner/spinner.component';

function Shop() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch({ type: 'categories/fetch-start' });
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}

export default Shop;
