import { createContext } from 'react';

import { CATEGORY } from '@/mock/category';

interface CategoryContextType {
  currentCategory: (typeof CATEGORY)[number]['value'];
  currentCategoryContentTitle: (typeof CATEGORY)[number]['contentTitle'];
  categories: typeof CATEGORY;
  changeCategory: (category: (typeof CATEGORY)[number]['value']) => void;
}

export const CategoryContext = createContext<CategoryContextType>({
  currentCategory: CATEGORY[0].value,
  currentCategoryContentTitle: CATEGORY[0].contentTitle,
  categories: CATEGORY,
  changeCategory: () => {},
});
