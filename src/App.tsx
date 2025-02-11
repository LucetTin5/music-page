import { Header } from '@/components/layout/Header';
import { CategoryProvider } from '@/context/category/CategoryProvider';

export const App = () => {
  return (
    <div className="container max-w-md mx-auto">
      <CategoryProvider>
        <Header />
        <div />
      </CategoryProvider>
    </div>
  );
};
