import { Banner } from '@/components/layout/Banner';
import { Contents } from '@/components/layout/Contents';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { CategoryProvider } from '@/context/category/CategoryProvider';

export const App = () => {
  return (
    <div className="container max-w-md mx-auto relative min-h-screen bg-white">
      <CategoryProvider>
        <Header />
        <Banner />
        <Contents />
        <Footer />
      </CategoryProvider>
    </div>
  );
};
