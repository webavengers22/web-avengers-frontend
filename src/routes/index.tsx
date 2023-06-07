import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../store';
import PrivateRoute from './private';
import { RoutePath } from '../constants';
import LoginPage from '../pages/login';
import MainPage from '../pages/main';

const queryClient = new QueryClient();

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {/* false */}
            <Route element={<PrivateRoute auth={false} />}>
              <Route path={RoutePath.login} element={<LoginPage />} />
            </Route>
            {/* true */}
            <Route element={<PrivateRoute auth={false} />}>
              <Route path={RoutePath.main} element={<MainPage />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
