import { createContext } from 'react';

import { CATEGORY } from '@/constants/category';

interface CategoryContextType {
  currentCategory: (typeof CATEGORY)[number]['value'];
  categories: typeof CATEGORY;
  changeCategory: (category: (typeof CATEGORY)[number]['value']) => void;
}

export const CategoryContext = createContext<CategoryContextType>({
  currentCategory: CATEGORY[0].value,
  categories: CATEGORY,
  changeCategory: () => {},
});
