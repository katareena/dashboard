import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from '../../context';
import { AppRoute } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import Home from '../home/home';
import Products from '../products/products';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { sidebarMainData, sidebarMobileData } from '../../mocks/sidebar';
import { incomes } from '../../mocks/incomes';
import { products } from '../../mocks/products';
import { experts } from '../../mocks/experts';
import { user } from '../../mocks/user';
import { notifications } from '../../mocks/notifications';
 
function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={
            <MainPage
              sidebarMainData={sidebarMainData}
              sidebarMobileData={sidebarMobileData}
              user={user}
              notifications={notifications}
              products={products}
              experts={experts}
            />}>
            <Route index element={
              <Home
                incomes={incomes}
                products={products}
                experts={experts}
            /> } />

            <Route path={AppRoute.Products} element={<Products /> } />
            <Route path={AppRoute.Customers} element={<div>Customers</div>} />
            <Route path={AppRoute.Shop} element={<div>Shop</div>} />
            <Route path={AppRoute.Income} element={<div>Income</div>} />
            <Route path={AppRoute.Promotes} element={<div>Promotes</div>} />

            <Route path={AppRoute.Settings} element={<div>Settings</div>} />
            <Route path={AppRoute.Help} element={<div>Help</div>} />
            <Route path={AppRoute.Logout} element={<div>Logout</div>} />

            <Route path={AppRoute.Other} element={<div>Other</div>} />
          </Route>

          <Route path={AppRoute.NoFoundPage} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
