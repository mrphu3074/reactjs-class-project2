import React from 'react';
import {
  ProductListConsumer,
  ProductListProvider
} from '../../Providers/admin/ProductListProvider.js';
import ProductList from '../../Components/admin/ProductList.js';

export default function ProductListLanding() {
  return (
    <div>
      <ProductListProvider>
        <ProductListConsumer>
          {value => (
            <ProductList
              loading={value.state.loading}
              list={value.state.list}
            />
          )}
        </ProductListConsumer>
      </ProductListProvider>
    </div>
  );
}
