import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import HomePage from '../../pages/home-page/home-page';
import Main from '../main/main';
import Products from '../products/products';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<HomePage />}>
          <Route index element={<Main /> } />
          <Route path={AppRoute.Products} element={<Products /> } />
        </Route>


        <Route path={AppRoute.NoFoundPage} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
