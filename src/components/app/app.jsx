import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import Home from '../home/home';
import Products from '../products/products';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { sidebarMainData, sidebarUserData, sidebarMobileData } from '../../mocks/sidebar';
import { incomes } from '../../mocks/incomes';
import { products } from '../../mocks/products';
import { experts } from '../../mocks/experts';
import { user } from '../../mocks/user';
import { notifications } from '../../mocks/notifications';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={
          <MainPage
            sidebarMainData={sidebarMainData}
            sidebarUserData={sidebarUserData}
            sidebarMobileData={sidebarMobileData}
            user={user}
            notifications={notifications}
          />}>
          <Route index element={
            <Home
              incomes={incomes}
              products={products}
              experts={experts}
          /> } />
          <Route path={AppRoute.Products} element={<Products /> } />
        </Route>

        <Route path={AppRoute.NoFoundPage} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
