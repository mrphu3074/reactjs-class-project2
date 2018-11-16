import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../Components/web/Home';
import MainLayout from '../../Components/web/MainLayout';
import ProductDetail from '../../Components/web/ProductDetail';

export default function HomeRoute() {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product/:productId" component={ProductDetail} />
      </Switch>
    </MainLayout>
  );
}
