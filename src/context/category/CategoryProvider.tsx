import React, { useState, useCallback } from 'react';

import { CATEGORY } from '@/constants/category';
import { CategoryContext } from '@/context/category/CategoryContext';

export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentCategory, setCurrentCategory] = useState<
    (typeof CATEGORY)[number]['value']
  >(CATEGORY[0].value);

  const changeCategory = useCallback(
    (category: (typeof CATEGORY)[number]['value']) => {
      setCurrentCategory(category);
    },
    [],
  );

  return (
    <CategoryContext.Provider
      value={{ currentCategory, categories: CATEGORY, changeCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
