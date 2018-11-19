import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Components/web/Home';
import MainLayout from '../../Components/web/MainLayout';
import ProductDetailRoute from './ProductDetailRoute';

export default function HomeRoute() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:productId" component={ProductDetailRoute} />
      </Switch>
    </MainLayout>
  );
}
