import React from 'react';
import { Link } from 'react-router-dom';

export default class Product extends React.Component {
  render() {
    const { item } = this.props;
    
    return (
      <div className="product-image-wrapper">
        <div className="single-products">
          <div className="productinfo text-center">
            <Link to={`/product/${item._id}`} style={{ display: 'block' }}>
              <img src="../../template/web/images/home/product1.jpg" alt="" />
              <h2>${item.price}</h2>
              <p>{item.name}</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
