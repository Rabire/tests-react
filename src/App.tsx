import { Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ZoomSection } from 'components/ZoomSection';
import { Hero } from 'components/Hero';
import { Sections } from 'components/Sections';
import { CardList } from 'components/CardList';
import { AuthContextProvider } from 'contexts/Auth';
import { CssReset, Theme } from 'styles/globals';
import { Home } from 'page/home';

export const routes = [
  { path: 'zoom', element: <ZoomSection /> },
  { path: 'hero', element: <Hero /> },
  { path: 'sections', element: <Sections /> },
  { path: 'card-list', element: <CardList /> }
];

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <CssReset />
      <Theme />

      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />

            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
