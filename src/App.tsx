import { CategoryProvider } from '@/context/category/CategoryProvider';

export const App = () => {
  return (
    <div className="container max-w-sm mx-auto">
      <CategoryProvider>
        <div />
      </CategoryProvider>
    </div>
  );
};
