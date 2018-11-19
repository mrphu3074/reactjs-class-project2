import React from "react";
import Product from "../../Components/admin/ProductDetails.js";
import {
  ProductDetailsConsumer,
  ProductDetailsProvider
} from "../../Providers/ProductDetailsProvider.js";
export default function ProductDetails(props) {
  const productId = props.match.params.id;
  const fileEl = document.getElementById("file");
  return (
    <ProductDetailsProvider>
      <ProductDetailsConsumer>
        {value => (
          <Product
            product={value.state.product}
            handleOnSubmit={value.handleOnSubmit}
            handleOnChange={value.handleOnChange}
            handleOnUpload={()=>value.handleOnUpload}
            getProduct={() => value.getProductById(productId)}
          />
        )}
      </ProductDetailsConsumer>
    </ProductDetailsProvider>
  );
}
