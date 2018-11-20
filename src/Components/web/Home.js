import React from 'react';
import isEmpty from 'lodash/isEmpty';
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
              if (isEmpty(value.list)) {
                return <div className="col">No Product</div>;
              }

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
