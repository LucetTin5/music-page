import { ChartList } from '@/components/contents/ChartList';
import { useCategoryContext } from '@/context/category/useCategoryContext';

export const Contents = () => {
  const { currentCategory, currentCategoryContentTitle } = useCategoryContext();
  return (
    <div className="flex flex-col gap-4 bg-gray-200 px-4 pt-4 pb-16">
      <h3 className="text-md font-bold">{currentCategoryContentTitle}</h3>
      {/* TODO: category component-mapping */}
      {currentCategory === 'chart' && <ChartList />}
    </div>
  );
};
