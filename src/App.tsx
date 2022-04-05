import { QueryClientProvider, QueryClient } from 'react-query';
import { Sections } from 'component/Sections';
import { CardList } from 'component/CardList';
import { CssReset, Theme } from 'styles/globals';

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <CssReset />
      <Theme />

      <Sections />

      <QueryClientProvider client={queryClient}>
        <CardList />
      </QueryClientProvider>
    </>
  );
}

export default App;
