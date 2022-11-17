import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../constants/constants';
import MainPage from '../../pages/main-page/main-page';
import Home from '../home/home';
import Products from '../products/products';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />}>
          <Route index element={<Home /> } />
          <Route path={AppRoute.Products} element={<Products /> } />
        </Route>


        <Route path={AppRoute.NoFoundPage} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
