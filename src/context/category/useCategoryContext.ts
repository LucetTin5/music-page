import { useContext } from 'react';

import { CategoryContext } from '@/context/category/CategoryContext';

export const useCategoryContext = () => {
  const { currentCategory, categories, changeCategory } =
    useContext(CategoryContext);

  return { currentCategory, categories, changeCategory };
};
