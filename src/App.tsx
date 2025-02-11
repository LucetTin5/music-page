import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { CategoryProvider } from '@/context/category/CategoryProvider';

export const App = () => {
  return (
    <div className="container max-w-md mx-auto relative min-h-screen">
      <CategoryProvider>
        <Header />
        <Footer />
      </CategoryProvider>
    </div>
  );
};
