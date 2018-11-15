import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeComponent from '../../Components/admin/Home.js';
import ProductList from './ProductListRoutes.js';
import ProductDetails from './ProductDetails.js';
import MainLayout from '../../Components/admin/MainLayout.js';
import CategoryList from './CategoryListRoutes.js';
import CategoryDetails from './CategoryDetails.js';

export default function Home(props) {
  const { url } = props.match;
  
  return (
    <MainLayout>
      <Switch>
        <Route exact path={url} component={HomeComponent} />
        <Route exact path={`${url}/product`} component={ProductList} />
        <Route exact path={`${url}/product/:id`} component={ProductDetails} />
        <Route exact path={`${url}/product/create`} component={ProductDetails} />
        <Route exact path={`${url}/category`} component={CategoryList} />
        <Route exact path={`${url}/category/:id`} component={CategoryDetails} />
        <Route
          exact
          path={`${url}/category/create`}
          component={CategoryDetails}
        />
      </Switch>
    </MainLayout>
  );
}
