import { takeLatest, all, call, put } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch({ type: 'categories/fetch-start' });
//   try {
//     const categoriesArray = await getCategoriesAndDocuments();
//     dispatch({ type: 'categories/fetch-success', payload: categoriesArray });
//   } catch (error) {
//     dispatch({ type: 'categories/fetch-failed', payload: error });
//   }
// };

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);

    yield put({ type: 'categories/fetch-success', payload: categoriesArray });
  } catch (error) {
    yield put({ type: 'categories/fetch-failed', payload: error });
  }
}

export function* onFetchCategories() {
  yield takeLatest('categories/fetch-start', fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
