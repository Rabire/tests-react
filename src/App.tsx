import { QueryClientProvider, QueryClient } from 'react-query';
import { Hero } from 'component/Hero';
import { Sections } from 'component/Sections';
import { CardList } from 'component/CardList';
import { CssReset, Theme } from 'styles/globals';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <CssReset />
      <Theme />

      <Hero />

      <Sections />

      <QueryClientProvider client={queryClient}>
        <CardList />
      </QueryClientProvider>
    </>
  );
}

export default App;
