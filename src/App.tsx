import { QueryClientProvider, QueryClient } from 'react-query';
import { ZoomSection } from 'components/ZoomSection';
import { Hero } from 'components/Hero';
import { Sections } from 'components/Sections';
import { CardList } from 'components/CardList';
import { AuthContextProvider } from 'contexts/Auth';
import { CssReset, Theme } from 'styles/globals';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <CssReset />
      <Theme />

      <AuthContextProvider>
        <ZoomSection />

        <Hero />

        <Sections />
      </AuthContextProvider>

      <QueryClientProvider client={queryClient}>
        <CardList />
      </QueryClientProvider>
    </>
  );
}

export default App;
