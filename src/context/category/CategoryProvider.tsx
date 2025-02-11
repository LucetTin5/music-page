import React, { useState, useCallback } from 'react';

import { CategoryContext } from '@/context/category/CategoryContext';
import { Category, CATEGORY } from '@/mock/category';

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
