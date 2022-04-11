import { QueryClientProvider, QueryClient } from 'react-query';
import { ZoomSection } from 'component/ZoomSection';
import { Hero } from 'component/Hero';
import { Sections } from 'component/Sections';
import { CardList } from 'component/CardList';
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
