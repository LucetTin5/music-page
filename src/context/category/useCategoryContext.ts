import { useContext } from 'react';

import { CategoryContext } from '@/context/category/CategoryContext';

export const useCategoryContext = () => {
  const {
    currentCategory,
    currentCategoryContentTitle,
    categories,
    changeCategory,
  } = useContext(CategoryContext);

  return {
    currentCategory,
    currentCategoryContentTitle,
    categories,
    changeCategory,
  };
};
