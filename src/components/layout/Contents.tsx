import { useCategoryContext } from '@/context/category/useCategoryContext';

export const Contents = ({ children }: { children: React.ReactNode }) => {
  const { currentCategoryContentTitle } = useCategoryContext();
  return (
    <div className="flex flex-col gap-2 bg-gray-400 p-2">
      <h3 className="text-lg font-semibold">{currentCategoryContentTitle}</h3>
      {children}
    </div>
  );
};
