import React from 'react';
import ProductDetail from '../../Components/web/ProductDetail';
import {
  ProductDetailProvider,
  ProductDetailConsumer
} from '../../Providers/web/ProductDetailProvider';

export default function ProductDetailRoute(props) {
  const { match } = props;
  
  return (
    <ProductDetailProvider productId={match.params.productId}>
      <ProductDetailConsumer>
        {value => (
          <ProductDetail
            item={value.data}
            fetchProducts={value.fetchProducts}
          />
        )}
      </ProductDetailConsumer>
    </ProductDetailProvider>
  );
}
