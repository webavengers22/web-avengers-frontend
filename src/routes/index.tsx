import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from '../store';
import PrivateRoute from './private';
import { RoutePath } from '../constants';
import LoginPage from '../pages/login';
import SignupPage from '../pages/signup';
import MyPage from '../pages/myPage';
import CustomerServicePage from '../pages/customerService';
import TravelTipsPage from '../pages/travelTips';
import TravelGuidePage from '../pages/travelGuide';
import CustomerSupportPage from '../pages/customerSupport';
import HomePage from '../pages/home';
import DefaultLayout from '../layouts/defaultLayout';

const queryClient = new QueryClient();

const Router = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {/* false */}
            <Route element={<PrivateRoute auth={false} />}>
              <Route
                path={RoutePath.home}
                element={
                  <DefaultLayout>
                    <HomePage />
                  </DefaultLayout>
                }
              />
              <Route
                path={RoutePath.login}
                element={
                  <DefaultLayout>
                    <LoginPage />
                  </DefaultLayout>
                }
              />
              <Route
                path={RoutePath.signup}
                element={
                  <DefaultLayout>
                    <SignupPage />
                  </DefaultLayout>
                }
              />
              <Route
                path={RoutePath.travelTips}
                element={
                  <DefaultLayout>
                    <TravelTipsPage />
                  </DefaultLayout>
                }
              />
              <Route
                path={RoutePath.customerService}
                element={
                  <DefaultLayout>
                    <CustomerServicePage />
                  </DefaultLayout>
                }
              />
              <Route
                path={RoutePath.customerSupport}
                element={
                  <DefaultLayout>
                    <CustomerSupportPage />
                  </DefaultLayout>
                }
              />
            </Route>
            {/* true */}
            <Route element={<PrivateRoute auth={true} />}>
              <Route
                path={RoutePath.myPage}
                element={
                  <DefaultLayout>
                    <MyPage />
                  </DefaultLayout>
                }
              />
              <Route
                path={RoutePath.travelGuide}
                element={
                  <DefaultLayout>
                    <TravelGuidePage />
                  </DefaultLayout>
                }
              />
            </Route>
          </Routes>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default Router;
