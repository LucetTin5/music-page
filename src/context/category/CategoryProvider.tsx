import React, { useState, useCallback } from 'react';

import { Category, CATEGORY } from '@/constants/category';
import { CategoryContext } from '@/context/category/CategoryContext';

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentCategory, setCurrentCategory] = useState<Category>(CATEGORY[0]);

  const changeCategory = useCallback(
    (category: (typeof CATEGORY)[number]['value']) => {
      setCurrentCategory(
        CATEGORY.find((c) => c.value === category) as Category,
      );
    },
    [],
  );

  return (
    <CategoryContext.Provider
      value={{
        currentCategory: currentCategory.value,
        currentCategoryContentTitle: currentCategory.contentTitle,
        categories: CATEGORY,
        changeCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
