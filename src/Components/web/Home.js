import React from 'react';
import SideBar from './SideBar';
import Product from './Product';
import {
  ProductProvider,
  ProductConsumer
} from '../../Providers/web/ProductProvider';

export default function Home() {
  return (
    <div className="features_items">
      <h2 className="title text-center">All Items</h2>
      <div className="row">
        <ProductProvider>
          <ProductConsumer>
            {value => {
              return value.list.map((product, index) => (
                <div key={index} className="col-sm-4">
                  <Product item={product} />
                </div>
              ));
            }}
          </ProductConsumer>
        </ProductProvider>
      </div>
    </div>
  );
}
