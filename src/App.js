import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './template/admin/assets/css/www_subdomain/custom.css';
import './template/admin/assets/css/www_subdomain/fontastic.css';
import './template/admin/assets/css/www_subdomain/grasp_mobile_progress_circle-1.0.0.min.css';
import './template/admin/assets/css/www_subdomain/style.default.css';
import './template/admin/assets/vendor/bootstrap/css/www_subdomain/bootstrap.min.css';
import ProductList from "./Routes/ProductListRoutes.js";
import ProductDetails from "./Routes/ProductDetails.js";
import Home from "./Routes/Home.js";
import MainLayout from "./Components/MainLayout.js";
import CategoryList from "./Routes/CategoryListRoutes.js";
import CategoryDetails from "./Routes/CategoryDetails.js";

function App() {
    return (
      <BrowserRouter>
        <MainLayout>
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/product" component ={ProductList}/>
                <Route exact path = "/product/:id" component = {ProductDetails}/>
                <Route exact path = "/product/create" component = {ProductDetails}/>
                <Route exact path = "/category" component = {CategoryList}/>
                <Route exact path = "/category/:id" component = {CategoryDetails}/>
                <Route exact path = "/category/create" component = {CategoryDetails}/>
            </Switch>
        </MainLayout>
      </BrowserRouter>
    );
}

export default App;
